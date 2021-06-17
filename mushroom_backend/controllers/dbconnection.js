const mariadb = require("mariadb");


const connection = mariadb.createPool({
  host: process.env.DB_HOST,
  port:3307,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
// .then(conn => {
//   console.log("connected ! connection id is " + conn.threadId);
// })
// .catch(err => {
//   console.log("not connected due to error: " + err);
// });

module.exports = connection;



// const mysql = require("mysql");

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
// });
// connection.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else console.log("connected to", process.env.DB_DATABASE);
// });
// module.exports = connection;
