import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";
import {MessagesController} from "./controllers/MessagesController";

const routes = Router();

const settingsControllers = new SettingsController();
const usersControllers = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsControllers.create);

routes.post("/users", usersControllers.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
export { routes }; 