import { Box, Button, FormControlLabel, Switch } from "@mui/material";
import { FC, ReactElement } from "react";
import { ITaskFooter } from "./interfaces/ITaskFooter";

export const TaskFooter: FC<ITaskFooter> = ({
  onStatusChange,
  onClick,
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch onChange={onStatusChange} />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: "#fff" }}
        onClick={onClick}
      >
        Mark Complete
      </Button>
    </Box>
  );
};
