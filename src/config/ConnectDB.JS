// import mysql2 from "mysql2";
// const db = mysql2.createPool({
//   host: "localhost",
//   user: "root",
//   database: "nodejs",
// });

// module.exports = {
//     db: db.promise()
// }

import sequelize from "sequelize";

const db = new sequelize("nodejs", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  db.authenticate();
  console.log("Database connected successfully.");
} catch (err) {
  console.log("Database connection error: " + err);
}
export default db;
