import { Priority } from '../../create-task-form/enums/priority';
import { Status } from '../../create-task-form/enums/status';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
