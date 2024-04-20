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
    <div className="search-ui" style={{display:'flex', flexDirection:'row',  minHeight:"100vh"}}>
      <div style={{width:"400px", marginRight:"auto"}}><SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} /></div>
      <div style={{ display:"flex", justifyContent:'center', alignItems:"center", marginLeft:'auto', marginRight:'auto'}}><ResultContainer data={responseData} isLoading={isLoading} /></div>

    </div>
  );
}
