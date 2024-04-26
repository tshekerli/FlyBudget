import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({onChange}) {
  const [sort, setSort] = React.useState('price');

  const handleChange = (event) => {
    setSort(event.target.value);
    
    onChange(event.target.value); 
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="sortby"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="Sort by"
        >
          <MenuItem value={'price'}>Price</MenuItem>
          <MenuItem value={'duration'}>Duration</MenuItem>
          <MenuItem value={'quality'}>Quality</MenuItem>
          <MenuItem value={'date'}>Date</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}