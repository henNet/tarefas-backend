import { Router } from "express";
import controllerTasks from "./controller/controller-tasks.js";

const routes = Router();

routes.get("/tarefas", controllerTasks.Select);
routes.post("/tarefas", controllerTasks.Insert);
routes.put("/tarefas", controllerTasks.Update);
routes.delete("/tarefas", controllerTasks.Delete);

export default routes;
