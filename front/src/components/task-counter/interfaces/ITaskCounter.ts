import { Status } from "../../create-task-form/enums/status";

export type TaskCounterStatusType = Status.todo | Status.inProgress | Status.completed;

export interface ITaskCounter {
    count?: string;
    status?: TaskCounterStatusType;
}