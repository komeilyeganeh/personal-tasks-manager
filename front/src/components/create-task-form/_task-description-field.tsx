import { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import { ITextField } from "./interfaces/ITextField";

export const TaskDescriptionField: FC<ITextField> = ({
  onChange,
  disabled,
  value
}): ReactElement => {
  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="title"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
      value={value}
    />
  );
};
