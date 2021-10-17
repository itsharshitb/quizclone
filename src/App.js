import React, { useEffect, useState } from "react";
import "./App.css";
import Question from "./Question";
import Option from "./Option";

function App() {
  const [ques, setques] = useState([]);
  const [queno, setQueno] = useState(0);
  const [opt, setOpt] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAns, setUserAns] = useState([]);

  const api = "https://opentdb.com/api.php?amount=10";
  const apiReq = async () => {
    fetch(`${api}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        setques(data.results);
      });
  };

  useEffect(() => {
    apiReq();
  }, []);

  let ans = "";

  useEffect(() => {
    const arr = [];
    if (ques.length) {
      arr.push(...ques[queno].incorrect_answers, ques[queno].correct_answer);
      ans = ques[queno].correct_answer;
      arr.sort(() => Math.random() - 0.5);
      setOpt(arr);
      setIsAnswered(false);
    }
  }, [queno, ques]);

  return (
    <div>
      {ques.length ? (
        <>
          <Question value={ques[queno].question} />
          <div className="options">
            {opt.map((value, index) => (
            <Option
              value={value}
              isCorrect={value === ans}
              isAnswered={isAnswered}
              setIsAnswered={setIsAnswered}
              setUserAns={setUserAns}
            />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
}

export default App;
