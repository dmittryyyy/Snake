import Header from "./components/Header";
import { Board } from "./components/GameField/index.tsx";

import HighScore from "./components/HighScore";
import Score from "./components/Score";

import { HIGH_SCORE_KEY } from "./constants.ts";
import ModalGameOver from "./components/Modals/ModalGameOver.tsx";
import PausedModal from "./components/Modals/ModalPaused.tsx";
import {useCallback, useEffect, useState} from "react";

function App() {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [justStarted, setJustStarted] = useState(true);

  if (localStorage.getItem(HIGH_SCORE_KEY) === null) {
    localStorage.setItem(HIGH_SCORE_KEY, "0");
  }
  const highScore = Number(localStorage.getItem(HIGH_SCORE_KEY));

  const handleBodyClick = useCallback(() => {
    if (justStarted) {
      setIsPlaying(true);
      setJustStarted(false);
      setScore(0);

      return;
    }

    !isGameOver && setIsPlaying(!isPlaying);
  }, [isGameOver, isPlaying, justStarted]);

  const handleKeyDown = useCallback((e: { key: string }) => {
    if (e.key === "Enter") {
      handleBodyClick();
    }
  }, [handleBodyClick]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="grid grid-cols-12 gap-x-4">
      {isGameOver && (
        <ModalGameOver
          setIsGameOver={setIsGameOver}
          setIsPlaying={setIsPlaying}
          finalScore={score}
          setJustStarted={setJustStarted}
          setScore={setScore}
        />
      )}
      {justStarted
        ? ""
        : !isGameOver &&
          !isPlaying && <PausedModal setIsPlaying={setIsPlaying} />}
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
          <Board
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
