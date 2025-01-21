import { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import { Sidebar } from "../../components/sidebar/sidebar";
import { TextArea } from "../../components/text-area/text-area";

export const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TextArea />
      <Sidebar />
    </Grid>
  );
};
