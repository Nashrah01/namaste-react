import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",
{ id: "heading" },
 "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// const nestedHead = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I'm a H1 tag!"), React.createElement("h2", {}, "I'm a H2 tag!")]));

const nestedHead = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child1"}, 
[React.createElement("h1", {}, "This is Namaste React🚀"),
React.createElement("h2", {}, "I'm a H2 tag!")]),
React.createElement("div", {id: "child2"}, 
[React.createElement("h1", {}, "I'm a H1 tag!"), React.createElement("h2", {}, "I'm a H2 tag!")]
)]);

root.render(nestedHead);