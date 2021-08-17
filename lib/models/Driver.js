const drivers = require("../controllers/drivers");
const pool = require("../utils/pool");

module.exports = class Driver {
  id;
  fname;
  lname;
  handle;
  sponsor;
  car_color;
  car_number;

  constructor(row) {
    this.id = row.id;
    this.fname = row.fname;
    this.lname = row.lname;
    this.handle = row.handle;
    this.sponsor = row.sponsor;
    this.car_color = row.car_color;
    this.car_number = row.car_number;
  }

  static async retrieve() {
    const { rows } = await pool.query("SELECT * FROM drivers");
    return rows.map((row) => new Driver(row));
  }
};
