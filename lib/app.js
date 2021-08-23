const express = require("express");
// const cors = require("cors");
// const morgan = require('morgan');
// const superagent = require('superagent');

// ***pool is not needed here with concerns separated:
// const pool = require("./utils/pool.js");
const app = express();

//app.use(cors());
app.use(express.json());

app.use("/api/v1/drivers", require("./controllers/drivers"));
//app.use('/api/v1/races', require('./controllers/races'));

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

console.log("Hey There");

module.exports = app;
