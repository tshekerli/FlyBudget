import LocationSelect from "./search";
import PaxSelect from "./paxSelect";
import BasicSelect from "./currency";
import { Head } from "./searchHead";
import SelectAutoWidth from "./sortby";
import DatePickerDrawer from "./flexibleDates";
import ButtonComponent from "./button";
import  { useState } from 'react';





function SearchBox() {
  const [data, setData] = useState({
    departure: '',
    destination: '',
    departureDateFrom: '',
    departureDateTo: '',
    returnDateFrom: '',
    returnDateTo: '',
    currency: '',
    sortBy: 'price',

  });

  const handleFieldChange = (field) => (value) => {
    console.log(`Setting ${field} to`, value);
    setData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  
  
  const sendRequest = async () => {
    console.log('sendRequest function called');
    try {
      const response = await fetch('http://localhost:5000/usersearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="searchbox" style={{ width: "400px", backgroundColor:"#F0F0F0", padding: '15px' }}>
      <Head />
      <h2 style={{paddingLeft:"15px"}}>Search</h2>
      <div style={{ paddingLeft: "15px" }}>
        <p style={{ fontWeight: "bold", fontSize:"1rem" }}>Departure</p>
        <LocationSelect id={"departure"} label={"City or airport"} onChange = {handleFieldChange('departure')}/>
      </div>

      <div style={{ paddingLeft: "15px" }}>
        <p>Destination</p>
        <LocationSelect id={"arrival"} label={"City or airport"} onChange={handleFieldChange('destination')}  />
      </div>
      <div style={{paddingLeft:"15px", marginTop:"15px"}}>
        <DatePickerDrawer
          id1="departure-from"
          id2="departure-to"
          labeltext1="departure date from"
          labeltext2="departure date to"
          buttontext={"departure date"}
          datechange1={handleFieldChange("departureDateFrom")}
        datechange2={handleFieldChange("departureDateTo")}
        />
      </div>
      <div style={{paddingLeft:"15px", marginTop:"15px"}}>
        <DatePickerDrawer
          id1="return-from"
          id2="return-to"
          labeltext1="return date from"
          labeltext2="return date to"
          buttontext={"return date"}
          datechange1={handleFieldChange("returnDateFrom")}
        datechange2={handleFieldChange("returnDateTo")}
        />
      </div>
      <PaxSelect onChange = {handleFieldChange("pax")}/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          justifyContent: "space-between",
          padding:"10px 40px 10px 40px"

        }}
      >
        <BasicSelect style={{ paddingLeft:"40px" }} onCurrencyChange={handleFieldChange("currency")} />

        <SelectAutoWidth onChange={handleFieldChange("sortBy")} />

        


      </div>
      <div style={{display: "flex", justifyContent:"space-between", padding:"20px 40px 20px 40px"}}>
      <ButtonComponent text={"Clear"} id={"clear-button"} style={{width: "8rem", borderRadius: "10px", fontSize: "1.25rem", color:"black", borderColor:"black"}} />
      <ButtonComponent text={"Search"} id={"search-button"} style={{width: "8rem", borderRadius: "10px", fontSize: "1.25rem", color:"black", borderColor:"black"}} onClick = {async () => await sendRequest()} 
 />
      </div>
    </div>
  );
}

export default SearchBox;
