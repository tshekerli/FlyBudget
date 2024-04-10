import * as React from 'react';
import Button from '@mui/material/Button';


export default function ButtonComponent({ text, id, style, onClick }) {
  return (
    <Button 
      variant="outlined" 
      id={id} 
      onClick={onClick}
      sx={style}
    >
      {text}
    </Button>
  );
}