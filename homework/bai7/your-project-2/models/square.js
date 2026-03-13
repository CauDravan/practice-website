const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

const saveSquareData = (side, perimeter, area) => {

  return new Promise((resolve, reject) => {

    const sql = "INSERT INTO squares (side, perimeter, area) VALUES (?, ?, ?)";

    db.query(sql, [side, perimeter, area], (err, result) => {

      if (err) {
        return reject(err);
      }

      resolve(result);

    });

  });

};

module.exports = {
  saveSquareData
};