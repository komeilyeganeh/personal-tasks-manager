import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskFooter } from "./interfaces/ITaskFooter";
import { Status } from "../create-task-form/enums/status";

export const TaskFooter: FC<ITaskFooter> = ({
  id,
  onStatusChange,
  status,
  onClick,
}): ReactElement => {
  // return jsx
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={
          <Switch
            onChange={(e) => onStatusChange(e, id)}
            defaultChecked={status === Status.inProgress}
          />
        }
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#fff" }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
