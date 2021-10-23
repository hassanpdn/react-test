//import React from "react";
import ReactDOM from "react-dom";
//import Pet from './Pet';
//import Search from './SearchParams';
//import CustomComopnent from "./CustomComponent";
import Test from './Test'

const App = () => {
      return(
            <div>
                  <h1>Adopt me!</h1>
                  {/*<Pet animal="first" class="dfsdf"></Pet>
                  <Pet animal="second"></Pet>
                  <Pet animal="third"></Pet>*/}
                  {/*<Search/>*/}
                  <Test/>
                  {/*<CustomComopnent name="reza"/>*/}
            </div>
      );
}

ReactDOM.render(<App/>, document.getElementById("root"));
