
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//  Middleware
app.use(cors());
app.use(express.json());

//  Routes
const experiencesRoute = require("./routes/experiences");
app.use("/api/experiences", experiencesRoute);

//  MongoDB Atlas Connection
mongoose.connect(process.env.MONGODB_URI, {

})
  .then(() => {
    console.log("MongoDB connected to Atlas");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB:", err);
  });
