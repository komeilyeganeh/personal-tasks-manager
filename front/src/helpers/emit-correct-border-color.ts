import { Status } from "../components/create-task-form/enums/status";
import { TaskCounterStatusType } from "../components/task-counter/interfaces/ITaskCounter";


export const emitCorrectBorderColor = (
  status: TaskCounterStatusType
): string => {
  switch (status) {
    case Status.todo:
      return "error.light";
    case Status.inProgress:
      return "warning.light";
    case Status.completed:
      return "success.light";
  }
};
