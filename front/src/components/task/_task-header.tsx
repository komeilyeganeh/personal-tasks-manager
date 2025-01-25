import { Box, Chip, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskHeader } from "./interfaces/ITaskHeader";

export const TaskHeader: FC<ITaskHeader> = ({title = "Default text", date}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={2}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={date?.format("MMMM, DD, YYYY")}/>
      </Box>
    </Box>
  );
};
