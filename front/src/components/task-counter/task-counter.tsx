import { Avatar, Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskCounter } from "./interfaces/ITaskCounter";
import { Status } from "../create-task-form/enums/status";
import { emitCorrectBorderColor } from "../../helpers/emit-correct-border-color";
import { emitCorrectLabel } from "../../helpers/emit-correct-label";

export const TaskCounter: FC<ITaskCounter> = ({
  count = 0,
  status = Status.todo,
}): ReactElement => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: "transparent",
            border: "5px solid",
            width: "96px",
            height: "96px",
            marginBottom: "16px",
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="#151515" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography fontWeight="bold" fontSize="20px">
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};
