import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, `animal-${props.animal}`),
    React.createElement("h2", {}, `animal-${props.animal}`),
    React.createElement("h3", {}, `animal-${props.animal}`),
  ]);
};

const x = 19;

const App = () => {
  return React.createElement(
    "div",
    {},

    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)),
    React.createElement(Pet, { animal: "first" }),
    React.createElement(Pet, { animal: "second" }),
    React.createElement(Pet, { animal: "third" })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
