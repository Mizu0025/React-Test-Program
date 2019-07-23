import React from "react";
import NotFound from "./404PageNotFound.png";
import "./404PageNotFound.css";

const PageNotFound = () => (
  <img src={NotFound} alt="Page Not Found!" className="center" />
);

export default PageNotFound;
