import LocationSelect from "./search";
import PaxSelect from "./paxSelect";
import BasicSelect from "./currency";
import BasicDatePicker from "./datePicker";
import Check_box from "./checkbox";
import { Head } from "./searchHead";
import SelectAutoWidth from "./sortby";
import DatePickerDrawer from "./flexibleDates";

function SearchBox() {
  return (
    <div className="searchbox" style={{ width: "400px" }}>
      <Head />
      <div style={{ marginLeft: "20px" }}>
        <p style={{ fontWeight: "bold" }}>Departure</p>
        <LocationSelect id={"departure"} label={"City or airport"} />
      </div>

      <div style={{ marginLeft: "20px" }}>
        <p>Destination</p>
        <LocationSelect id={"arrival"} label={"City or airport"} />
      </div>
      <div>
        <DatePickerDrawer
          id1="departure-from"
          id2="departure-to"
          labeltext1="departure date from"
          labeltext2="departure date to"
          buttontext={"departure date"}
        />
      </div>
      <div>
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
          alignItems: "center",
        }}
      >
        <BasicSelect style={{ marginTop: "10px" }} />

        <SelectAutoWidth />
      </div>
    </div>
  );
}

export default SearchBox;
