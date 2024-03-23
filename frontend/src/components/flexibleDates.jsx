import * as React from 'react';
import BasicDatePicker from './datePicker';
import Check_box from './checkbox';
import { Button } from '@mui/material';

function DatePickerDrawer(labeltext1, labeltext2) {
  const [open, setOpen] = React.useState(false);
  const [dates, setDates] = React.useState({ departure: null, return: null });
  const [isReturn, setIsReturn] = React.useState(false);

  const handleDateChange = (date, type) => {
    setDates(prevDates => ({ ...prevDates, [type]: date }));
    setOpen(false); 
  };

  const handleCheckChange = (checked) => {
    setIsReturn(checked);
    if (!checked) {
      setDates(prevDates => ({ ...prevDates, return: null }));
    }
  };

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Please select departure date</Button>
      <div style={{ display: open ? 'block' : 'none' }}>
        <label>
          <Check_box onCheckChange={handleCheckChange} />
          Do you want to select flexible dates?
        </label>
        <BasicDatePicker
          id="departure-date"
          className="departure-date"
          labelText={`Please select ${labeltext1}`}
          onDateChange={(date) => handleDateChange(date, 'departure')}
        />
        {isReturn && (
          <BasicDatePicker
            id="return-date"
            className="return-date"
            labelText={`Please select ${labeltext2}`}
            onDateChange={(date) => handleDateChange(date, 'return')}
          />
        )}
      </div>
    </div>
  );
}

export default DatePickerDrawer;