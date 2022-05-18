import React from "react";

function Heading({ title, para1, para2 }) {
  return (
    <div className="heading-wrap">
      <h1> {title} </h1>
      <div className="para-wrap">
        <p className="p1"> {para1} </p>
        <p className="p2"> {para2} </p>
      </div>
    </div>
  );
}

export default Heading;
