import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import InitViewengine from "./src/config/InitViewEngine.js";
import routeHome from "./src/route/routeHome.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3010;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

InitViewengine(app);
routeHome(app);

app.use((req, res) => {
  res.status(404).render("404.ejs");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
