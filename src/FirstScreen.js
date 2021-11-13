import React from "react";

function FirstScreen() {
  return (
    <>
      <div className="header">
          <header>Welcome to the quiz!!</header>
      </div>
      <div className="instruction">
          <h1>Follow the instructions:</h1>
      </div>
      <div>
          <ol>
              <li>You have given 10 questions randomly.</li>
              <li>You have to select your answer in order to attend next question.</li>
              <li>In the end we will show you your final score</li>
          </ol>
      </div>
    </>
  );
}

export default FirstScreen;
