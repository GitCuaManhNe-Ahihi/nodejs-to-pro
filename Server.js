import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { createServer } from "http";
import morgan from "morgan";
import { Server } from "socket.io";
import InitViewengine from "./src/config/InitViewEngine.js";
import routeChat from "./src/routes/chat.js";
const SocketServices = require("./src/services/ChatService.js")
import { LogEvent,LogMorgan } from "./src/helper/index.js";
const app = express();
const createError = require("http-errors");

dotenv.config();
global.basedir = __dirname;
const port = process.env.PORT || 3010;
const httpServer = createServer(app);
const io = new Server(httpServer);
global._io = io;


app.use(cors());
app.use(helmet())
app.use(morgan("combined",{stream:LogMorgan}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

InitViewengine(app);

// routeHome(app);
routeChat(app);
app.use((req, res,next) => {
  return next(createError(404,"NOTFOUND"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  LogEvent(err.status || 500,err.message,req.method)
  if(err.status === 404){
    return res.render("404.ejs")
  }
 return  res.json({
    message: err.message,
    status: err.status
    });
})

global._io.on('connection', SocketServices.connection)


httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
