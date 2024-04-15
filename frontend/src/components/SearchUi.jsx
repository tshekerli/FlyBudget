import SearchBox from "./searchBox";
import { useState, react } from "react";

export function SearchUi() {
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    setResponseData(data);
  };

  return (
    <div className="search-ui">
      <SearchBox onFetch={handleResponseData} />
      
    </div>
  );
}
