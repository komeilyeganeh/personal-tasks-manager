import { Box, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskDescription } from "./interfaces/ITaskDescription";

export const TaskDescription: FC<ITaskDescription> = ({
  text = "test...",
}): ReactElement => {
  return (
    <Box>
      <Typography>{text}</Typography>
    </Box>
  );
};
