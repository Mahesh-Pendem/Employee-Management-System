const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

//This middleware is used to read form data sent from HTML forms.
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Logger Middleware
//morgan:Middleware that logs HTTP requests in the terminal.
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Employee Management API is running...");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});