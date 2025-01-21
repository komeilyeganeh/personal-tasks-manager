import { FC, ReactElement } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IDateField } from "./interfaces/IDateField";

export const TaskDateField: FC<IDateField> = ({
  onChange,
  value = null,
  disabled = false,
}): ReactElement => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Basic date picker"
          views={["year", "month", "day"]}
          value={value}
          onChange={(newDate) => onChange(newDate)}
          disabled={disabled}
          sx={{
            width: "100%"
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};
