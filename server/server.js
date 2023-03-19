const express = require("express");
const app = express();
const config = require("dotenv");
const PORT = process.env.PORT || 5000;

config.config();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
