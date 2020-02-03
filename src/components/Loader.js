import React from "react";
import loading from "../assets/images/loader.gif";
function Loader() {
  return (
    <div>
      <img src={loading} alt="Loading" className="d-block mx-auto"/>
    </div>
  );
}

export default Loader;
