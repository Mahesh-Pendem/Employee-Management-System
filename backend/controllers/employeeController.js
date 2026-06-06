const Employee = require("../models/Employee");

const getEmployees = async (req, res) => {
  try {
    const { search, status, department } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } }
      ];
    }

    if (status) {
      query.status = status;
    }

    if (department) {
      query.department = {
        $regex: `^${department}$`,
        $options: "i"
      };
    }

    const employees = await Employee.find(query).sort({ createdAt: -1 });

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  res.json(employee);
};

const createEmployee = async (req, res) => {
  const {
    name,
    email,
    phone,
    department,
    designation,
    salary,
    status,
    joiningDate
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !department ||
    !designation ||
    !salary ||
    !joiningDate
  ) {
    res.status(400);
    throw new Error("All required fields must be filled");
  }

  if (Number(salary) <= 0) {
    res.status(400);
    throw new Error("Salary must be positive");
  }

  const existing = await Employee.findOne({ email });

  if (existing) {
    res.status(400);
    throw new Error("Employee email already exists");
  }

  // Generate unique employee ID
  const lastEmployee = await Employee.findOne().sort({
    createdAt: -1
  });

  let employeeId = "EMP0001";

  if (lastEmployee && lastEmployee.employeeId) {
    const lastNumber = parseInt(
      lastEmployee.employeeId.replace("EMP", "")
    );

    employeeId = `EMP${String(lastNumber + 1).padStart(4, "0")}`;
  }

  const employee = await Employee.create({
    employeeId,
    name,
    email,
    phone,
    department,
    designation,
    salary,
    status,
    joiningDate
  });

  res.status(201).json(employee);
};

const updateEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  const duplicate = await Employee.findOne({
    email: req.body.email,
    _id: { $ne: req.params.id }
  });

  if (duplicate) {
    res.status(400);
    throw new Error("Employee email already exists");
  }

  Object.assign(employee, req.body);

  if (Number(employee.salary) <= 0) {
    res.status(400);
    throw new Error("Salary must be positive");
  }

  const updatedEmployee = await employee.save();

  res.json(updatedEmployee);
};

const deleteEmployee = async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    res.status(404);
    throw new Error("Employee not found");
  }

  await employee.deleteOne();

  res.json({
    message: "Employee deleted successfully"
  });
};

const getDashboardStats = async (req, res) => {
  const total = await Employee.countDocuments();

  const active = await Employee.countDocuments({
    status: "Active"
  });

  const inactive = await Employee.countDocuments({
    status: "Inactive"
  });

  res.json({
    total,
    active,
    inactive
  });
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getDashboardStats
};