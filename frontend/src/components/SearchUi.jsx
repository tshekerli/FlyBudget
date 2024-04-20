import SearchBox from "./searchBox";
import { useState, react } from "react";
import { ResultContainer } from "./results";
export function SearchUi() {

  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    
    setResponseData(data);
  };

  return (
    <div className="search-ui" style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
      <div style={{width:"400px"}}><SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} /></div>
      <div style={{gridColumn: '2 / span 2', display:"flex", justifyContent:'center', alignItems:"center"}}><ResultContainer data={responseData} isLoading={isLoading} /></div>

    </div>
  );
}
