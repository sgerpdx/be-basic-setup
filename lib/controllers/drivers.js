const { Router } = require("express");
const Driver = require("../models/Driver");

module.exports = Router().get("/", async (req, res, next) => {
  try {
    const drivers = await Driver.retrieve();
    res.send(drivers);
  } catch (err) {
    next(err);
  }
});

// module.exports = Router().get("/", async (req, res) => {
//   try {
//     const data = Driver.retrieve();
//     res.json(data.rows);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });
