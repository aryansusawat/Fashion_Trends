const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require("./routes/rootroutes");
const productroute = require("./routes/Productroutes");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 6000;
const app = express();
connectDB();


app.use("/", rootroute);

app.use("/fashiontrends",productroute);

app.listen(PORT, () => {
  console.log(`Sever is running on http://localhost:${PORT}`.bgBlue.white);
});