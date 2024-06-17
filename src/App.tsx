// import { useState } from "react";

import Header from "./components/Header";
import { Field } from './components/GameField/index.tsx';
// import Modal from "./components/Modal";

import { useState } from "react";
import HighScore from "./components/HighScore";
import Score from "./components/Score";

import { HIGH_SCORE_KEY } from "./constants.ts";

function App() {
  // const [modalContent, setModalContent] = useState({
  //   title: null,
  //   text: null,
  //   prompt: null,
  // });
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [justStarted, setJustStarted] = useState(true);

  if (localStorage.getItem(HIGH_SCORE_KEY) === null) {
    localStorage.setItem(HIGH_SCORE_KEY, "0");
  }
  const highScore = Number(localStorage.getItem(HIGH_SCORE_KEY));

  const handleBodyClick = () => {
    if (justStarted) {
      setIsPlaying(true);
      setJustStarted(false);
      setScore(0);

      return;
    }

    !isGameOver && setIsPlaying(!isPlaying);
  };

  return (
    <div className="grid grid-cols-12 gap-x-4">
      {/*<Modal*/}
      {/*  title={modalContent.title}*/}
      {/*  text={modalContent.text}*/}
      {/*  prompt={modalContent.prompt}*/}
      {/*/>*/}
      <Header />
      <HighScore
        score={highScore}
        className="col-start-5 col-span-4 justify-self-center mt-4"
      />
      <div
        className="bg-field min-h-screen cursor-pointer overflow-hidden col-start-3 col-span-8 mt-4"
        onClick={handleBodyClick}
      >
        <Score
          score={score}
          justStarted={justStarted}
          className="m-0 mt-4 m-auto"
        />
        {!isGameOver && !justStarted && (
          <Field
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            externalScore={score}
            setScore={setScore}
            setIsGameOver={setIsGameOver}
          />
        )}
      </div>
    </div>
  );
}

export default App;
