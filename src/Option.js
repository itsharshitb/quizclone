import React from "react";

function Option({ value, isCorrect, isAnswered, setIsAnswered }) {
  const setAnswer = () => {
    setIsAnswered(true);
    // console.log(true);
  };
  return (
    <div
      onClick={setAnswer}
      className={`option ${isAnswered && isCorrect ? "correctAns" : ""}`}
      dangerouslySetInnerHTML={{ __html: value }}
    ></div>
  );
}

export default Option;

//  old method
// class Option extends React.Component {
//   render() {
//     return (
//       <div
//         className="option"
//         dangerouslySetInnerHTML={{ __html: this.props.value }}
//       ></div>
//     );
//   }
// }

// export default Option;
