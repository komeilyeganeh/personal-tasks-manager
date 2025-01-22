import { AppDataSource } from "../..";
import { Task } from "./tasks.entity";
import { instanceToPlain } from "class-transformer";

export class TasksController {
  constructor(private taskRepository = AppDataSource.getRepository(Task)) {}
  public async getAll() {
    let tasks = [];
    try {
      tasks = await this.taskRepository.find({
        order: {
          date: "ASC",
        },
      });
      tasks = instanceToPlain(tasks) as Task[];
      
    } catch (err) {
      console.log(err);
    }
  }
}
