const mysql = require("mysql");

// MYSQL 
const password = process.argv[2];
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password,
    database: "burgers",
  });

  module.exports = connection;