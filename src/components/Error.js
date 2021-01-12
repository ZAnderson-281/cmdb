import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>ERROR</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Error;
