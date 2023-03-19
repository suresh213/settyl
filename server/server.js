const express = require("express");
const app = express();
const config = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/config/config");

const PORT = process.env.PORT || 5000;

const EmployeeRoutes = require("./routes/index");

config.config();
connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api", EmployeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
