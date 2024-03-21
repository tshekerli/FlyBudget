import * as React from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import citiesData from '../db/db.json'; 



const citiesArray = Object.entries(citiesData).map(([label, code]) => ({
  label,
  code
}));


function LocationSelect({ id, label, onValueChange }) {
  return (
    <Autocomplete
      id={id}
      options={citiesArray}
      getOptionLabel={(option) => `${option.label} (${option.code})`}
      onChange={(event, value) => {
        if (value) {
          onValueChange(value.code);
        }
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
export default  LocationSelect