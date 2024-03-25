import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationSelect from './components/search';
import Check_box from './components/checkbox';
import PaxSelect from './components/paxSelect';
import DatePickerDrawer from './components/flexibleDates';
import BasicSelect from './components/currency';

import Sortby from './components/sortby';



function App() {
  
 
  return (
    <div className="App">
      
      <Sortby/>
    </div>
  )
}

export default App;