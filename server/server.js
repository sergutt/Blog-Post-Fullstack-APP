const express = require("express");
// It's a web framework that let's you structure a web application to handle multiple different http requests at a specific url. Express is a minimal, open source and flexible Node. js web app framework designed to make developing websites, web apps, & API's much easier.

const app = express();
// initializing express

const mongoose = require("mongoose");
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

const cors = require("cors");
// “CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
const PORT = 5054;
// A port is a number used to uniquely identify a transaction over a network by specifying both the host, and the service.

require("dotenv").config();

// The dotenv is a zero-dependency module that loads environment variables from a . env file into process. env .

// Setup middleware, middleware built for us from respective libraries
// software that acts as a brigde between an opertating system or databases on applications especially on a network
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Use the mongoose driver and library to communicate server side code with MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hawsa-blog-db",
  (err) => {
    if (err) throw new Error({ msg: err });
    console.log("connected to mongodb");
  }
);

// custom routes set up as middleware
app.use("/blog", require("./routes/blogRoutes"));
app.use("/user", require("./routes/userRoutes"));

// sets up port that is listening on physical hardware
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
