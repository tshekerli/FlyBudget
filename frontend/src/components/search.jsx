import * as React from "react";
import { useState, useEffect } from "react";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function LocationSelect({ id, label }) {
  const [citiesArray, setCitiesArray] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/locations")
      .then((response) => response.json())
      .then((data) => {
        const cities = data.map(({ locationName: label, code }) => ({
          label,
          code,
        }));
        setCitiesArray(cities);
      });
  }, []);

  return (
    <Autocomplete
      style={{ marginTop: "10px" }}
      id={id}
      className="location-select"
      label={label}
      options={citiesArray}
      getOptionLabel={(option) => `${option.label} (${option.code})`}
      onChange={(event, value) => {
        if (value) {
          setSelectedCity(value.code);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px 25px 25px 25px",
            },
            "& .MuiInputLabel-root": {
              fontWeight: "bold",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "initial",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "initial",
            },
          }}
        />
      )}
    />
  );
}

export default LocationSelect;
