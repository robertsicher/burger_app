const mysql = require("mysql");

// MYSQL 
const password = process.argv[2];

  if(process.env.JAWSDB_URL) {
      connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password,
        database: "burgers", });
  };

  module.exports = connection;