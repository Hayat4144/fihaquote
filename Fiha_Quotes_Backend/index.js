// Initilize all the depedencies
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./source/Route/routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { DbConnection } = require("./Config/DbConnection");
const { CloudinaryConfiguration } = require("./Config/CloudinaryConfig");
const cors = require('cors') ;
const csrf = require('csurf')

dotenv.config();

// setting database
DbConnection();

// initializing route from route.js
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}

app.use(cors(corsOptions))
app.use(cookieParser());
app.use(bodyParser.json());


// cloudinary configuration
CloudinaryConfiguration()

// body parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// initialize port
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`some error has been occured ${err}`);
  } else {
    console.log(`server running at port` + " " + process.env.PORT);
  }
});

