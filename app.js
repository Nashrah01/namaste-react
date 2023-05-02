import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",
{ id: "heading" },
 "Namaste React🚀");
console.log(heading);
//JSX

const jsxHeading = <h1 className="head" tabIndex="1" >Namaste React from JSX🚀</h1>;
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);




