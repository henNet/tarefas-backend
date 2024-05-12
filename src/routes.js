import { Router } from "express";
import controllerTasks from "./controller/controller-tasks.js";

const routes = Router();

routes.get("/tarefas", controllerTasks.Select);
routes.post("/tarefas", controllerTasks.Insert);
routes.put("/tarefas/:id_tarefa", controllerTasks.Update);
routes.delete("/tarefas/:id_tarefa", controllerTasks.Delete);

export default routes;
