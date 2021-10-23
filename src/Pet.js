import React from "react";

//const Pet = (props) => {
//  return React.createElement("div", {}, [
//    React.createElement("h2", {}, `anqal-${props.animal}`),
//    React.createElement("h2", {}, `animal-${props.animal}`),
//    React.createElement("h3", {}, `animal-${props.animal}`),
//  ]);
//};

const Pet = (props) =>  {
      return (
        <div>
          <h2>{props.animal}</h2>
          <h3>{props.name}</h3>
          <h3>{props.breed}</h3>
        </div>
      );
}

export default Pet;
