const mongoose = require("mongoose");

//Emp DB Connection
//edited by mahesh
const employeeSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    department: {
      type: String,
      required: [true, "Department is required"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required"],
    },
    salary: {
      type: Number,
      required: [true, "Salary is required"],
      min: [1, "Salary must be positive"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    joiningDate: {
      type: Date,
      required: [true, "Joining date is required"],
    },
  },
  { timestamps: true },
);

employeeSchema.pre("save", async function (next) {
  if (!this.employeeId) {
    const count = await mongoose.model("Employee").countDocuments();
    this.employeeId = `EMP${String(count + 1).padStart(4, "0")}`;
  }
  next();
});

module.exports = mongoose.model("Employee", employeeSchema);
