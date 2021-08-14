const express = require("express");
const app = express();

app.use(express.json());

//app.use('/api/v1/drivers', require('./controllers/drivers'));
//app.use('/api/v1/races', require('./controllers/races'));

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

console.log("Hey There");

module.exports = app;
