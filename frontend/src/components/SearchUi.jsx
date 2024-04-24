import SearchBox from "./searchBox";
import { useState, react } from "react";
import { ResultContainer } from "./results";
import ScrollAnimation from "./scrollanimation";
export function SearchUi() {

  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    
    setResponseData(data);
  };

  return (
    
    <div className="search-ui">
  <div className="searchbox-outer" style={{width:"400px", marginRight:"auto"}}><SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} /></div>
  <div className="result-head" style={{ display:"flex", justifyContent:'center', alignItems:"center", marginLeft:'auto', marginRight:'auto',  }}><ResultContainer data={responseData} isLoading={isLoading} /></div>
</div>
  );
}
