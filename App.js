const heading = React.createElement(
  "h1",
  { id: "Heading", style: { color: "red", background: "blue" } },
  "Hello World!"
);
console.log(heading);

/*
creating the given structure:
<div id = "parent">
    <div id = "child">
        <h1>Hello</h1>
    </div>
</div>
*/

const parent = React.createElement(
  "div",
  {
    id: "parent",
    style: {
      height: "100px",
      width: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid",
    },
  },
  React.createElement(
    "div",
    {
      id: "child",
      style: {
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid",
      },
    },

    React.createElement("h6", {}, "Hello")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//here parent ==> react object
// and this reactObject is converted to the HTML that the browser is going to understand

/*
creating the given structure(with two siblings):
<div id = "parent">
    <div id = "child">
        <h1>Hello</h1>
        <h2>Hii</h2>
    </div>
</div>
*/

const parent2 = React.createElement(
  "div",
  {
    id: "Parent1",
    style: {
      marginTop: "2px",
      border: "2px solid red",
      height: "200px",
      width: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  React.createElement(
    "div",
    {
      id: "child",
      style: {
        height: "50px",
        width: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid",
      },
    },

    [
      React.createElement("h6", {}, "Hello"),
      React.createElement("br", {}, undefined),
      React.createElement("h5", {}, "hii"),
    ]
  )
);

root.render([heading, parent, parent2]);
