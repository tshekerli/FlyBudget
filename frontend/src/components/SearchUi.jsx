import SearchBox from "./searchBox";
import { useState, react } from "react";
import { ResultContainer } from "./results";
export function SearchUi() {

    
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    console.log('handleResponseData called with', data);
    setResponseData(data);
  };

  return (
    <div className="search-ui">
      <SearchBox onFetch={handleResponseData} />
      <ResultContainer data={responseData}/>

    </div>
  );
}
