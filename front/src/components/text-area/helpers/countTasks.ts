import { TaskCounterStatusType } from '../../task-counter/interfaces/ITaskCounter';

export const countTasks = (
  tasks: any,
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }

  const totalTasks = tasks.filter((task) => {
    return task.status === status;
  });

  return totalTasks.length;
};
