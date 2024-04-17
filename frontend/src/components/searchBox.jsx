import LocationSelect from "./search";
import PaxSelect from "./paxSelect";
import BasicSelect from "./currency";
import { Head } from "./searchHead";
import SelectAutoWidth from "./sortby";
import DatePickerDrawer from "./flexibleDates";
import ButtonComponent from "./button";
import { useState } from "react";

function SearchBox({onFetch, setIsLoading}) {

  const handleClear = () => {
    
    onFetch(null);
    
  };

  const [responseData, setResponseData] = useState(null);
  const handleResponseData = (data) => {
    setResponseData(data);
  };

  

  const [data, setData] = useState({
    fly_from: "",
    fly_to: "",
    date_from: "",
    date_to: "",
    return_from: "",
    return_to: "",
    curr: "USD",
    sort: "price",
    adults: "1",
    children: "0",
    limit:"25"
    
  });

  const handleFieldChange = (field) => (value) => {
    if (field === "pax") {
      setData((prevData) => ({
        ...prevData,
        adults: value.adults.toString(),
        children: value.children.toString(),
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [field]: value,
      }));
    }
  };

  const sendRequest = async () => {
    if (!data.fly_from || !data.fly_to || !data.date_from) {
      alert('Please add the search items');
      return;
    }
    setIsLoading(true);
    try {
      let requestData = { ...data };
      if (!requestData.date_to) {
        requestData.date_to = requestData.date_from;
      }
      if (!requestData.return_to) {
        requestData.return_to = requestData.return_from;
      }
      if (!requestData.return_from) {
        delete requestData.return_from;
        delete requestData.return_to;
      }
      
      console.log(requestData)
      const response = await fetch('http://localhost:5000/usersearch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.json();
      
      onFetch(responseData); 
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div
      className="searchbox"
      style={{ width: "400px", backgroundColor: "#F0F0F0", padding: "15px" }}
    >
      <Head />
      <h2 style={{ paddingLeft: "15px" }}>Search</h2>
      <div style={{ paddingLeft: "15px" }}>
        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>Departure</p>
        <LocationSelect
          id={"departure"}
          label={"City or airport"}
          onChange={handleFieldChange("fly_from")}
        />
      </div>

      <div style={{ paddingLeft: "15px" }}>
        <p>Destination</p>
        <LocationSelect
          id={"arrival"}
          label={"City or airport"}
          onChange={handleFieldChange("fly_to")}
        />
      </div>
      <div style={{ paddingLeft: "15px", marginTop: "15px" }}>
        <DatePickerDrawer
          id1="departure-from"
          id2="departure-to"
          labeltext1="departure date from"
          labeltext2="departure date to"
          buttontext={"departure date"}
          datechange1={handleFieldChange("date_from")}
          datechange2={handleFieldChange("date_to")}
        />
      </div>
      <div style={{ paddingLeft: "15px", marginTop: "15px" }}>
        <DatePickerDrawer
          id1="return-from"
          id2="return-to"
          labeltext1="return date from"
          labeltext2="return date to"
          buttontext={"return date"}
          datechange1={handleFieldChange("return_from")}
          datechange2={handleFieldChange("return_to")}
        />
      </div>
      <PaxSelect onChange={handleFieldChange("pax")} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          justifyContent: "space-between",
          padding: "10px 40px 10px 40px",
        }}
      >
        <BasicSelect
          style={{ paddingLeft: "40px" }}
          onCurrencyChange={handleFieldChange("curr")}
        />

        <SelectAutoWidth onChange={handleFieldChange("sort")} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px 20px 40px",
        }}
      >
        <ButtonComponent
          text={"Clear"}
          id={"clear-button"}
          style={{
            width: "8rem",
            borderRadius: "10px",
            fontSize: "1.25rem",
            color: "black",
            borderColor: "black",
          }}
          onClick={handleClear}
        />
        <ButtonComponent
          text={"Search"}
          id={"search-button"}
          style={{
            width: "8rem",
            borderRadius: "10px",
            fontSize: "1.25rem",
            color: "black",
            borderColor: "black",
          }}
          onClick={async () => await sendRequest()}
        />
      </div>
    </div>
  );
}

export default SearchBox;
