import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationSelect from './components/search';
import Check_box from './components/checkbox';
import PaxSelect from './components/paxSelect';
import DatePickerDrawer from './components/flexibleDates';
import BasicSelect from './components/currency';




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

<PaxSelect onPaxChange={(newPax) => console.log(newPax)} />

<DatePickerDrawer />

<BasicSelect  />
    </div>
  );
}

export default App;