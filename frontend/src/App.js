import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationSelect from './components/search';
import Check_box from './components/checkbox';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = (newCheckedState) => {
    setIsChecked(newCheckedState);
  };

  const handleValueChange = (value) => {
    console.log(value);
  };
 
  return (
    <div>
      <Check_box onCheckChange={handleCheckChange} />
      {isChecked ? (
        <LocationSelect
          id="departure-location"
          label="Please select your departure location"
          onValueChange={handleValueChange}
        />
      ) : (
        <LocationSelect
          id="arrival-location"
          label="Please select your arrival location"
          onValueChange={handleValueChange}
        />
      )}
    </div>
  );
}

export default App;