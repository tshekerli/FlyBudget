import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

function Check_box({ onCheckChange, styling }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (onCheckChange) {
      onCheckChange(event.target.checked);
    }
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      sx={styling}
    />
  );
}

export default Check_box;