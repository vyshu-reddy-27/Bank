"use strict";

var express = require('express');

var bodyparser = require('body-parser');

var register = require("./ROUTES/userRoutes");

require('dotenv').config();

require('./db');

var app = express();
var port = 6000;
app.use(bodyparser.json());
app.use("/user", register);
app.listen(port, function () {
  console.log("listening");
});