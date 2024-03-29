import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function BasicDatePicker({ className, id, labelText }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={labelText}
          format="DD/MM/YYYY"
          closeOnSelect={true}
          disablePast={true}
          views={["day"]}
          slotProps={{ field: { clearable: true } }}
          className={className}
          id={id}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default BasicDatePicker;

