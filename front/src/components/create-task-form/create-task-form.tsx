import {
  Box,
  Stack,
  Typography,
  LinearProgress,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { FC, ReactElement, useEffect, useState } from "react";
import { TaskTitleField } from "./_task-title-field";
import { TaskDescriptionField } from "./_task-description-field";
import { TaskDateField } from "./_task-date-field";
import { TaskSelectField } from "./_task-select-field";
import { Priority } from "./enums/priority";
import { Status } from "./enums/status";
import dayjs, { Dayjs } from "dayjs";
import { useMutation } from "@tanstack/react-query";
import { sendApiReq } from "../../helpers/send-api-req";
import { ICreateTask } from "../text-area/interfaces/ICreateTask";

export const CreateTaskForm: FC = (): ReactElement => {
  // states
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [isShowSuccess, setIsShowSuccess] = useState<boolean>(false);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.low);
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: (data: ICreateTask) =>
      sendApiReq("http://localhost:3200/tasks", "POST", data),
  });

  const createTaskHandler = () => {
    if (!title || !date || !description) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };
    mutate(task);
  };

  // sideEffect
  useEffect(() => {
    if (isSuccess) {
      setIsShowSuccess(true)
    }
    const successTimeOut = setTimeout(() => {
      setIsShowSuccess(false)
    }, 7000);

    return () => clearTimeout(successTimeOut);
  }, [isSuccess])

  // return jsx
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={4}
      py={6}
      width="100%"
    >
      {isShowSuccess && (
        <Alert severity="success" variant="outlined" sx={{ width: "100%", marginBottom: "16px" }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <TaskTitleField onChange={(e) => setTitle(e.target.value)} disabled={isPending}/>
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField onChange={(e) => setDate(e)} value={date} />
        <Stack direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
              {
                value: Status.completed,
                label: Status.completed.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
        {isPending && <LinearProgress />}
        <Button
          disabled={!title || !description || !date || !status || !priority}
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
        >
          Create a task
        </Button>
      </Stack>
    </Box>
  );
};
