import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          borderRadius: 25,
        },
      },
    },
  },
});

function BasicDatePicker({ className, id, labelText, onChange }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label={labelText}
            format="DD/MM/YYYY"
            closeOnSelect={true}
            disablePast={true}
            views={["day"]}
            onChange={(date) => {
              if (date) {
                onChange(date.format("DD/MM/YYYY"));
              }
            }}
            slotProps={{ field: { clearable: true } }}
            className={className}
            id={id}
            renderInput={(params) => <TextField {...params} variant="outlined" />}
          />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default BasicDatePicker;