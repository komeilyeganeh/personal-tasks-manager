import { Grid } from "@mui/material";
import { FC, ReactElement } from "react";
import { Profile } from "../profile/profile";
import { CreateTaskForm } from "../create-task-form/create-task-form";

export const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        backgroundColor: "background.paper",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
      }}
    >
      <Profile />
      <CreateTaskForm />
    </Grid>
  );
};
