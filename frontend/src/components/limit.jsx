import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LimitBy({onChange}) {
  const [limit, setLimit] = React.useState('25');

  const handleChange = (event) => {
    setLimit(event.target.value);
    
    onChange(event.target.value); 
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Limit by</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="limitby"
          value={limit}
          onChange={handleChange}
          autoWidth
          label="Limit by"
        >
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'25'}>25</MenuItem>
          <MenuItem value={'50'}>50</MenuItem>
          <MenuItem value={'100'}>100</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}