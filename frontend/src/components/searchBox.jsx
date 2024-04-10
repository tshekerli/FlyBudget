import LocationSelect from "./search";
import PaxSelect from "./paxSelect";
import BasicSelect from "./currency";
import BasicDatePicker from "./datePicker";
import Check_box from "./checkbox";
import { Head } from "./searchHead";
import SelectAutoWidth from "./sortby";
import DatePickerDrawer from "./flexibleDates";
import ButtonComponent from "./button";




function SearchBox() {
  return (
    <div className="searchbox" style={{ width: "400px", backgroundColor:"#F0F0F0", padding: '15px' }}>
      <Head />
      <h2 style={{paddingLeft:"15px"}}>Search</h2>
      <div style={{ paddingLeft: "15px" }}>
        <p style={{ fontWeight: "bold", fontSize:"1rem" }}>Departure</p>
        <LocationSelect id={"departure"} label={"City or airport"} />
      </div>

      <div style={{ paddingLeft: "15px" }}>
        <p>Destination</p>
        <LocationSelect id={"arrival"} label={"City or airport"} />
      </div>
      <div style={{paddingLeft:"15px", marginTop:"15px"}}>
        <DatePickerDrawer
          id1="departure-from"
          id2="departure-to"
          labeltext1="departure date from"
          labeltext2="departure date to"
          buttontext={"departure date"}
        />
      </div>
      <div style={{paddingLeft:"15px", marginTop:"15px"}}>
        <DatePickerDrawer
          id1="return-from"
          id2="return-to"
          labeltext1="return date from"
          labeltext2="return date to"
          buttontext={"return date"}
        />
      </div>
      <PaxSelect />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          justifyContent: "space-between",
          padding:"10px 40px 10px 40px"

        }}
      >
        <BasicSelect style={{ paddingLeft:"40px" }} />

        <SelectAutoWidth />

        


      </div>
      <div style={{display: "flex", justifyContent:"space-between", padding:"20px 40px 20px 40px"}}>
      <ButtonComponent text={"Clear"} id={"clear-button"} style={{width: "8rem", borderRadius: "10px", fontSize: "1.25rem", color:"black", borderColor:"black"}} />
      <ButtonComponent text={"Search"} id={"search-button"} style={{width: "8rem", borderRadius: "10px", fontSize: "1.25rem", color:"black", borderColor:"black"}} />
      </div>
    </div>
  );
}

export default SearchBox;
