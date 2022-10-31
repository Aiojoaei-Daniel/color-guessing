import { useState, useEffect } from "react";

import { getRandomColor } from "./getRandomColor";

const ANSWER = {
  CORRECT: "CORRECT ANSWER!",
  WRONG: "WRONG ANSWER!",
};

function App() {
  const randomIndex = Math.floor(Math.random() * 3);

  const [correctIndex, setCorrectIndex] = useState(randomIndex);
  const [colors, setColors] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  useEffect(() => {
    getRandomColors();
  }, []);

  const getRandomColors = () => {
    setTimeout(() => {
      setColors([]);
      for (let index = 0; index < 3; index++) {
        const color = getRandomColor();
        setColors((prev) => [...prev, color]);
      }
      setIsCorrect(false);

      const randomIndex = Math.floor(Math.random() * 3);
      setCorrectIndex(randomIndex);
    }, 1000);
  };

  const handleAnswer = (item) => {
    const selectedColor = item.target.value;

    if (selectedColor === colors[correctIndex]) {
      setIsCorrect(true);
      getRandomColors();
      setIsWrong(false);
    } else setIsWrong(true);
  };

  return (
    <main className="App">
      <div className="color-container">
        <header className="message-container">
          <p
            className="wrong"
            style={{ display: isWrong === true ? "block" : "none" }}
          >
            {ANSWER.WRONG}
          </p>
          <p
            className="correct"
            style={{ display: isCorrect === true ? "block" : "none" }}
          >
            {ANSWER.CORRECT}
          </p>
        </header>
        <div
          className="color"
          style={{ backgroundColor: colors[correctIndex] }}
        ></div>
        <div className="options">
          {colors.map((color) => (
            <button key={color} value={color} onClick={handleAnswer}>
              {color}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
