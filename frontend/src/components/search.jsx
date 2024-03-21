import * as React from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import citiesData from '../db/db.json'; 



const citiesArray = Object.entries(citiesData).map(([label, code]) => ({
  label,
  code
}));




function LocationSelect(x) {
  return (
    <Autocomplete
      id={x.id}
      options={citiesArray}
      disableCloseOnSelect
      getOptionLabel={(option) =>
        `${option.label} (${option.code})`
      }
      renderInput={(params) => <TextField {...params} label={x.label} />}
    />
  );
}


export default  LocationSelect