import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationSelect from './components/search';

function App() {
  const handleValueChange = (value) => {
    console.log(value);
  };

  return (
    <LocationSelect
      id="departure-location"
      label="Please select your departure location"
      onValueChange={handleValueChange}
    />
  );
}