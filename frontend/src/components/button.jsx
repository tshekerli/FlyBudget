import * as React from 'react';
import Button from '@mui/material/Button';


export default function ButtonComponent({ text, id, style }) {
  return (
    <Button 
      variant="outlined" 
      id={id} 
      
      sx={style}
    >
      {text}
    </Button>
  );
}