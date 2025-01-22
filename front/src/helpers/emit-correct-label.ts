import { Status } from "../components/create-task-form/enums/status";
import { TaskCounterStatusType } from "../components/task-counter/interfaces/ITaskCounter";

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return "Todo's";
    case Status.inProgress:
      return "In Progress";
    case Status.completed:
      return "Completed";
  }
};
