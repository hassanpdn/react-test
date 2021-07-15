import React from "react";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, `anqal-${props.animal}`),
    React.createElement("h2", {}, `animal-${props.animal}`),
    React.createElement("h3", {}, `animal-${props.animal}`),
  ]);
};

export default Pet;
