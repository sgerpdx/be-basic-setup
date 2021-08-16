const express = require("express");
// const cors = require("cors");
// const morgan = require('morgan');
// const superagent = require('superagent');
const pool = require("./utils/pool.js");
const app = express();

//app.use(cors());
app.use(express.json());

//app.use('/api/v1/drivers', require('./controllers/drivers'));
//app.use('/api/v1/races', require('./controllers/races'));

app.get("/drivers", async (req, res) => {
  try {
    //this possibly should be pool.query instead of client.query?
    const data = await pool.query("SELECT * from drivers");

    res.json(data.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/races", async (req, res) => {
  try {
    //this possibly should be pool.query instead of client.query?
    const data = await pool.query("SELECT * from races");

    res.json(data.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(require("./middleware/not-found"));
app.use(require("./middleware/error"));

console.log("Hey There");

module.exports = app;
