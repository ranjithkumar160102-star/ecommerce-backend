const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const connectDB = require("./config/db");



// env file

dotenv.config();



// database connection

connectDB();




const app = express();




// middleware

app.use(express.json());

app.use(cors());




// default route

app.get("/", (req, res) => {

  res.send("API Running");

});




// auth routes

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);




// product routes

app.use(
  "/api/products",
  require("./routes/productRoutes")
);




// analytics routes

app.use(
  "/api/analytics",
  require("./routes/analyticsRoutes")
);




// port

const PORT = process.env.PORT || 5000;




app.listen(PORT, () => {

  console.log("Server Started");

});