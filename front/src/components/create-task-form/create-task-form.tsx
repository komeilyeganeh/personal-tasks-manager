import { Box, Stack, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { TaskTitleField } from "./_task-title-field";
import { TaskDescriptionField } from "./_task-description-field";
import { TaskDateField } from "./_task-date-field";
import { TaskSelectField } from "./_task-select-field";
import { Priority } from "./enums/priority";
import { Status } from "./enums/status";

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px={4}
      py={6}
      width="100%"
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <TaskTitleField onChange={(e) => console.log(e)} />
        <TaskDescriptionField onChange={(e) => console.log(e)} />
        <TaskDateField onChange={(e) => console.log(e)} value={null} />
        <Stack direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
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
            items={[
              {
                value: Priority.low,
                label: Priority.low
              },
              {
                value: Priority.normal,
                label: Priority.normal
              },
              {
                value: Priority.high,
                label: Priority.high
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
