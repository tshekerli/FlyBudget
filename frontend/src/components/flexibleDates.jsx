import * as React from 'react';
import BasicDatePicker from './datePicker';
import Check_box from './checkbox';
import { Button } from '@mui/material';




function DatePickerDrawer({ id1, id2, labeltext1, labeltext2, buttontext })  {
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
      <Button 
  onClick={() => setOpen(!open)} 
  sx={{ 
    marginTop: '10px',
    marginLeft: '25px',
    borderRadius: '12px',
    color: 'black',
    border: '1px solid rgba(0, 0, 0, 0.5)'
    
  }}
>
  Please select {buttontext}
</Button>
      <div style={{ display: open ? 'block' : 'none' }}>
        <label>
          <Check_box 
          sx={{
            marginTop: '10px',
            marginLeft: '25px'
          
          }}
          onCheckChange={handleCheckChange} />
          Do you want to select flexible dates?
        </label>
        <BasicDatePicker
          id={id1}
          
          labelText={`Please select ${labeltext1}`}
          onDateChange={(date) => handleDateChange(date, 'departure')}
        />
        {isReturn && (
          <BasicDatePicker
            id={id2}
            
            labelText={`Please select ${labeltext2}`}
            onDateChange={(date) => handleDateChange(date, 'return')}
          />
        )}
      </div>
    </div>
  );
}

export default DatePickerDrawer;