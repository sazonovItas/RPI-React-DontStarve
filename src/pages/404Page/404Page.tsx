import React from "react";
import NotFoundImage from "assets/images/404NotFound/404NotFound1.png";
import "./404Page.css";

function PageNotFound() {
  return (
    <>
      <div className="container">
        <h1>404</h1>
        <img
          className="not-found-image"
          src={NotFoundImage}
          alt="NotFoundImage"
        />
      </div>
    </>
  );
}

export default PageNotFound;
