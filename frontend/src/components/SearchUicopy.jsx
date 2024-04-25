import SearchBox from "./searchBox";
import { useState, react } from "react";
import { ResultContainer } from "./results";
import ScrollAnimation from "./scrollanimation";
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export function SearchUi() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleResponseData = (data) => {
    setResponseData(data);
  };

  return (
    <div className="search-ui" style={{display:"flex", flexDirection:"row"}}>
      
        <div className="searchbox-outer">
          <h1 style={{textAlign:'center'}}>dsadsada</h1>
          <SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} />
        </div>
        <div style={{display:"flex", flexDirection:'column', marginLeft:'auto', marginRight:"auto"}}>
          <div >
            <h1 style={{textAlign:'center'}}>asdsadsada</h1>
          </div>
          <div className="result-head">
            <ResultContainer data={responseData} isLoading={isLoading} />
          </div>
        </div>
      
    </div>
  );
}