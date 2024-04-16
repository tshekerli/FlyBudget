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
    <div className="search-ui">
      <SearchBox onFetch={handleResponseData} setIsLoading={setIsLoading} />
      <ResultContainer data={responseData} isLoading={isLoading} />

    </div>
  );
}
