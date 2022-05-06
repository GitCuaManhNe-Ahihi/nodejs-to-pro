import express from "express";
import * as homeCTL from "../controller/homeController.js";
const route = express.Router();

const routeHome = (app) => {
  route
  .get("/", homeCTL.home)
  .get("/create", homeCTL.createtb)
  .get("/user", homeCTL.getUser);
  return app.use(route);
};

export default routeHome;
