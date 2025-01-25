import { FC, ReactElement } from "react";
import { Alert, Box, Grid, LinearProgress } from "@mui/material";
import dayjs from "dayjs";
import { TaskCounter } from "../task-counter/task-counter";
import { Task } from "../task/task";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendApiReq } from "../../helpers/send-api-req";
import { Status } from "../create-task-form/enums/status";
import { IUpdateTask } from "./interfaces/IUpdateTask";

export const TextArea: FC = (): ReactElement => {
  const { error, data, isLoading, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      return await sendApiReq("http://localhost:3200/tasks", "GET");
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IUpdateTask) =>
      sendApiReq("http://localhost:3200/tasks", "PUT", data),
  });

  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    mutate({ id, status: e.target.checked ? Status.inProgress : Status.todo });
  };

  const markCompleteHandler = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    mutate({ id, status: Status.completed });
  };

  // return jsx
  return (
    <>
    <Grid item md={4}></Grid>
    <Grid item md={8} px={4} py={4}>
      <Box mb={8} px={4} textAlign="center">
        <h2>
          Status Of Your Tasks As On - {dayjs().format("dddd, MMMM D, YYYY")}
        </h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
          >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          {error && (
            <Alert severity="error">
              There wwas an error fetching your tasks
            </Alert>
          )}
          {!error && Array.isArray(data) && data.length === 0 && (
            <Alert severity="warning">
              You do not have any tasks created yet. start by creating some
              tasks.
            </Alert>
          )}
          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data.map((task: any) => {
              return task.status === Status.todo ||
              task.status === Status.inProgress ? (
                <Task
                key={task.id}
                id={task.id}
                onStatusChange={(e, id) => onStatusChangeHandler(e, id!)}
                onClick={(e, id) => markCompleteHandler(e, id!)}
                title={task.title}
                date={dayjs(new Date(task.date))}
                text={task.description}
                priority={task.priority}
                status={task.status}
                />
              ) : null;
            })
          )}
        </Grid>
      </Grid>
    </Grid>
          </>
  );
};
