import React from "react"; 
import EmptySearchImage from "../img/emptysearch.jpg";

export function ResultContainer({data, loader}){
    console.log(data);
    if (!data){
        return <div>
            <img src={EmptySearchImage} alt="Please search" height={"500px"}/>
        </div>
    }
    else{
        return data.map((item, index) => (
            <div key={index}>
              <div className="locations">
                
              </div>
              <p>{item.link}</p>
              <p>{item.price}</p>
            </div>
        ));
    }
}