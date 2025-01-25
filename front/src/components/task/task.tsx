import { Box } from "@mui/material";
import { FC, ReactElement } from "react";
import { TaskHeader } from "./_task-header";
import { TaskDescription } from "./_task-description";
import { TaskFooter } from "./_task-footer";
import { ITask } from "./interfaces/ITask";

export const Task: FC<ITask> = ({
  id,
  priority,
  status,
  title,
  date,
  text,
  onStatusChange,
  onClick,
}): ReactElement => {  
  // return jsx
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        backgroundColor: "background.default",
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "error.light",
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription text={text} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} status={status} id={id}/>
    </Box>
  );
};
