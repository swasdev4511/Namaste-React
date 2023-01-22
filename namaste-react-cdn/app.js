let heading1 = React.createElement(
  "h1",
  { id: "header1", className: "headerClass" },
  " I am header - 1!"
);
let heading2 = React.createElement(
  "h1",
  { id: "header2", className: "headerClass" },
  " I am header - 2!"
);

let container = React.createElement(
  "div",
  { id: "container", className: "subDiv" },
  [heading1, heading2]
);

console.log(" heading - react - element : ", heading1);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
