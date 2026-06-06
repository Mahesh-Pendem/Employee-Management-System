const express = require("express");
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getDashboardStats
} = require("../controllers/employeeController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/stats", protect, getDashboardStats);
router.route("/")
  .get(protect, getEmployees)
  .post(protect, createEmployee);

router.route("/:id")
  .get(protect, getEmployeeById)
  .put(protect, updateEmployee)
  .delete(protect, deleteEmployee);

module.exports = router;
