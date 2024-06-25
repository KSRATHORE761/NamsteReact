import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{id:"heading"},"Namste react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Using JSX
//const jsxHeading = <h1 id="heading">Namste React🚀</h1>
//const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxHeading);

//React components:
//1. Class components
//2. Functional component

//React function component:
const HeadingComponent = () => {
  return (
    <div>
      <Title></Title>
      <h1>This is a example of functional component</h1>
    </div>
  );
};

// Component composition

const Title = () => <h1>Namste React🚀</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent></HeadingComponent>);

// Js element in component

const title = <h1>Namste React🚀</h1>;

const JsElementInComponent = () => (
  <div>
    {title}
    <h1>This is a example of js element in a component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HeadingComponent></HeadingComponent>
    <JsElementInComponent></JsElementInComponent>
  </>
);
