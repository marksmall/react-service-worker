"use strict";

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");

const search = require("./api/search.js");

app.use(morgan("dev")); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4201; // set our port

// ROUTES FOR OUR API
// =============================================================================

// create our router
const router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  next();
});

/* API */
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

router.get("/search", search.search);

// REGISTER OUR ROUTES -------------------------------
app.use("/api", router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`API Proxy listening on: http://localhost:${port}/api`);
