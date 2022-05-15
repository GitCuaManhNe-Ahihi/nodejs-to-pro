// // import mysql2 from "mysql2";
// // const db = mysql2.createPool({
// //   host: "localhost",
// //   user: "root",
// //   database: "nodejs",
// // });

// // module.exports = {
// //     db: db.promise()
// // }

// import sequelize from "sequelize";

// const db = new sequelize("nodejs", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
//   logging: false,
// });

// try {
//   db.authenticate();
//   console.log("Database connected successfully.");
// } catch (err) {
//   console.log("Database connection error: " + err);
// }
// export default db;

import mongodb, { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://admin2:10102001Aa@testcluster.w5znf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const Client = new MongoClient(uri);
let _db;
const test = async () => {
  try {
    const ex = await Client.connect();
    console.log("Connected successfully to server");
    _db = await ex.db();
    if (!_db) {
      throw new Error("Database not found");
    }
  } catch (err) {
    return 0;
  }
};

exports.db = _db;
exports.test = test;
