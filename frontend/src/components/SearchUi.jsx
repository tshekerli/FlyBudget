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
          <h1 style={{textAlign:'center', margin: "1rem",
          
          height: "4rem",
          borderRadius:"10px",
          width:"400px", fontFamily: "'Orienta', sans-serif", display:'flex', alignItems:'center', justifyContent:'center'}}> Please Search</h1>
          <SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} />
        </div>
        <div style={{display:"flex", flexDirection:'column', marginLeft:'auto', marginRight:"auto"}}>
          <div >
            <h1 style={{textAlign:'center', margin: "1rem",
          
          height: "4rem",
          borderRadius:"10px",
          width:"100%", fontFamily: "'Orienta', sans-serif", display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem'}}> Your search results will be shown below</h1>
          </div>
          <div className="result-head">
            <ResultContainer data={responseData} isLoading={isLoading} />
          </div>
        </div>
      
    </div>
  );
}