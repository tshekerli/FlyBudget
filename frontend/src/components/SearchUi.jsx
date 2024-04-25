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
      
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          className="searchbox-outer"
          style={{ width: "400px", marginRight: "auto", marginLeft: "1rem" }}
        >
          <h1 style={{
          margin: "1rem",
          boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
          height: "4rem",
          borderRadius:"10px",
          width:"400px"
        }}></h1>
          <SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} />
        </div>
        <div>
  <div style={{
    display: 'grid', 
    gridTemplateColumns: '1fr 1fr', 
    alignContent: 'center', 
    justifyItems: 'center', 
    marginLeft: "auto"
  }}>
    <h1 style={{
      margin: "1rem",
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
      height: "4rem",
      width: "600px"
    }}></h1>
  </div>
  <div
    className="result-head"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto"
    }}
  >
    <ResultContainer data={responseData} isLoading={isLoading} />
  </div>
</div>
      </div>
    </div>
  );
}
