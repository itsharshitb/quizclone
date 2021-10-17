import React from "react";

function Question({ value }) {
  return (
    <div className="question" dangerouslySetInnerHTML={{ __html: value }}></div>
  );
}

export default Question;
