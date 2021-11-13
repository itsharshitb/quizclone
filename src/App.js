import React, { useEffect, useState } from "react";
import "./App.css";
import Question from "./Question";
import Option from "./Option";
import Result from "./Result";

function App() {
  const [ques, setques] = useState([]);
  const [queno, setQueno] = useState(0);
  const [opt, setOpt] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAns, setUserAns] = useState([]);
  const [correctAns, setCorrectAns] = useState([]);
  const [count, setCount] = useState(0);
  const [alreadySelected, setAlreadySelected] = useState(false);

  const api = "https://opentdb.com/api.php?amount=10";
  const apiReq = async () => {
    fetch(`${api}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.results);
        setques(data.results);
      });
  };

  useEffect(() => {
    if (isAnswered) {
      setUserAns((prev) => [
        ...prev,
        document.getElementsByClassName("answered")[0].innerText,
      ]);
    }
  }, [isAnswered]);

  useEffect(() => {
    apiReq();
  }, []);

  useEffect(() => {
    const arr = [];
    if (ques.length && queno < 10) {
      console.log(ques[queno].correct_answer);
      arr.push(...ques[queno].incorrect_answers, ques[queno].correct_answer);
      arr.sort(() => Math.random() - 0.5);
      setCorrectAns((prev) => [...prev, ques[queno].correct_answer]);
      setOpt(arr);
      // console.log(userAns);
      setIsAnswered(false);
    }
    if (queno === 10) {
      let x = 0;
      for (let i = 0; i < 10; i++) {
        if (correctAns[i] === userAns[i]) x++;
      }
      setCount(x);
    }
  }, [queno, ques]);

  return queno < 10 ? (
    <>
      <div>
        {ques.length ? (
          <>
            <Question value={ques[queno].question} />
            <div className="options">
              {opt.map((value, index) => (
                <Option
                  key={index}
                  value={value}
                  isAnswered={isAnswered}
                  setIsAnswered={setIsAnswered}
                  setAlreadySelected={setAlreadySelected}
                />
              ))}
            </div>
            <footer>
              <button
                className="nextButton"
                disabled={!isAnswered}
                onClick={() => setQueno(queno + 1)}
                dangerouslySetInnerHTML={{ __html: "NEXT" }}
              />
            </footer>
          </>
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </div>
    </>
  ) : (
    <>
      <Result score={count} />
    </>
  );
}

export default App;
