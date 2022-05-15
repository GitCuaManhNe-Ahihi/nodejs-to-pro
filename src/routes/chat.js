import express from "express";
import { homechat } from "../controller/chatController";
const route = express.Router();

const routeChat = (app) => {
    route
        .get("/", homechat)
    return app.use(route);
    }

export default routeChat;