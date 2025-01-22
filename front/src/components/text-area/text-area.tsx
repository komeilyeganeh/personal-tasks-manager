import { FC, ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import dayjs from "dayjs";
import { TaskCounter } from "../task-counter/task-counter";
import { Task } from "../task/task";

export const TextArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4} py={4}>
      <Box mb={8} px={4}>
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
          <Task
            onStatusChange={() => console.log("status...")}
            onClick={() => console.log("clicked...")}
          />
          <Task
            onStatusChange={() => console.log("status...")}
            onClick={() => console.log("clicked...")}
          />
          <Task
            onStatusChange={() => console.log("status...")}
            onClick={() => console.log("clicked...")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
