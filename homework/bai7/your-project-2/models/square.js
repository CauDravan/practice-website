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

const insertSquare = (side, callback) => {

  const sql = "INSERT INTO squares (side) VALUES (?)";

  db.query(sql, [side], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });

};

module.exports = {
  db,
  insertSquare
};