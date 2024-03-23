import * as React from 'react';
import { useState, useEffect } from 'react';
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function LocationSelect({ id, label, onValueChange }) {
  const [citiesArray, setCitiesArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/locations')
      .then(response => response.json())
      .then(data => {
        const cities = data.map(({ locationName: label, code }) => ({
          label,
          code
        }));
        setCitiesArray(cities);
      });
  }, []);

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

export default LocationSelect;