const { Router } = require("express");
const Driver = require("../models/Driver");
const pool = require("../utils/pool");

module.exports = Router()
  .post("/", async (req, res, next) => {
    try {
      const driver = await Driver.create(req.body);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  })

  // .post("/", async (req, res, next) => {
  //   try {
  //     const { fname, lname, handle, sponsor, car_color, car_number } = req.body;

  //     const data = await pool.query(
  //       "INSERT INTO drivers (fname, lname, handle, sponsor, car_color, car_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
  //       [fname, lname, handle, sponsor, car_color, car_number]
  //     );
  //     res.json(data.rows[0]);
  //   } catch (error) {
  //     next(error);
  //   }
  // })

  .get("/", async (req, res, next) => {
    try {
      const drivers = await Driver.retrieve();
      res.send(drivers);
    } catch (err) {
      next(err);
    }
  })

  .get("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const driver = await Driver.retrieveById(id);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  })

  .put("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const drier = await Driver.update(req.body, id);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  })

  .delete("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const driver = await Driver.deleteById(id);
      res.send(driver);
    } catch (err) {
      next(err);
    }
  });
