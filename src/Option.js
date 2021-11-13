import React, { useState, useEffect } from "react";

function Option({ value, isAnswered, setIsAnswered, setAlreadySelected }) {
  const [selected, setSelected] = useState(false);

  const setAnswer = (e) => {
    if (!isAnswered) {
      setSelected(true);
      setIsAnswered(true);
    }
    else{
        setSelected(false);
        setIsAnswered(false);
    }
  };

  useEffect(() => {
    setSelected(false);
  }, [value])

  return (
    <div
      onClick={setAnswer}
      className={`option ${selected ? "answered" : ""}`}
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
