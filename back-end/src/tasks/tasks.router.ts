import { Request, Response, Router } from "express";
import { TasksController } from "./tasks.controller";

export const tasksRouter: Router = Router();

// create default route
tasksRouter.get("/tasks", async (req: Request, res: Response) => {
  const tasksController = new TasksController();
  const taskList = await tasksController.getAll();
  res.json(taskList).status(200);
});

tasksRouter.post("/tasks", async (req: Request, res: Response) => {
    
})
