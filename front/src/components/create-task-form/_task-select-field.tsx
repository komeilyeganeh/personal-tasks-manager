import { FC, ReactElement } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ISelectField, ISelectItem } from "./interfaces/ISelectField";

export const TaskSelectField: FC<ISelectField> = ({
  label = "Select Box",
  value,
  name = "SelectBox",
  onChange,
  disabled = false,
  items = [{ value: "", label: "Add Item" }],
}): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>Status</InputLabel>
      <Select
        labelId={`${name}-id`}
        id="status-select"
        value={value}
        label={label}
        name={name}
        disabled={disabled}
        onChange={onChange}
      >
        {items.map((item: ISelectItem) => (
          <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
