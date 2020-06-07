import React from "react";
import { render } from "react-dom";
import UploadForm from "./UploadForm";

const App = () => {
  return (
    <>
      <h1>React file upload demo</h1>
      <UploadForm />
    </>
  );
};

render(<App />, document.getElementById("root"));
