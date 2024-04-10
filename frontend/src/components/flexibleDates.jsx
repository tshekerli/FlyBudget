import * as React from 'react';
import BasicDatePicker from './datePicker';
import Check_box from './checkbox';
import { Button } from '@mui/material';

function DatePickerDrawer({ id1, id2, labeltext1, labeltext2, buttontext, datechange1, datechange2 })  {
  const [open, setOpen] = React.useState(false);
  const [isReturn, setIsReturn] = React.useState(false);

  const handleCheckChange = (checked) => {
    setIsReturn(checked);
  };

  return (
    <div>
      <Button 
        onClick={() => setOpen(!open)} 
        sx={{ 
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
            styling={{}}
            onCheckChange={handleCheckChange} 
          />
          Do you want to select flexible dates?
        </label>
        <BasicDatePicker
          id={id1}
          labelText={`Please select ${labeltext1}`}
          onChange={datechange1}
        />
        {isReturn && (
          <BasicDatePicker
            id={id2}
            labelText={`Please select ${labeltext2}`}
            onChange={datechange2}
          />
        )}
      </div>
    </div>
  );
}

export default DatePickerDrawer;