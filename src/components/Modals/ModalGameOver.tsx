import { HIGH_SCORE_KEY } from "../../constants";
import React, {useCallback, useEffect} from "react";

interface GameOverModal {
  finalScore: number;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setJustStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function GameOverModal({
  finalScore,
  setIsGameOver,
  setIsPlaying,
  setJustStarted,
  setScore,
}: GameOverModal) {

  const handleGameReset = useCallback(() => {
    setIsGameOver(false);
    setIsPlaying(true);
    setJustStarted(true);
    setScore(0);
  }, [setIsGameOver, setIsPlaying, setJustStarted, setScore]);

  const handleKeyDown = useCallback((e: { key: string }) => {
    if (e.key === "Enter") {
      handleGameReset();
    }
  }, [handleGameReset]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const currentHighScore = Number(localStorage.getItem(HIGH_SCORE_KEY));
  const highScoreBeaten = finalScore > currentHighScore;
  if (highScoreBeaten) {
    localStorage.setItem(HIGH_SCORE_KEY, finalScore.toString());
  }

  return (
    <div
      className="bg-black bg-opacity-50 fixed h-full w-full"
      onClick={handleGameReset}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white border-2 rounded-xl border-gold">
        <h2 className="text-text-color-500 text-8xl font-bold mb-8">
          Game Over
        </h2>
        <p>
          Your Final Score: <span>{finalScore}</span>
        </p>
        {highScoreBeaten && finalScore > 0 && (
          <p>🏆 You beat the high score! 🏆</p>
        )}
        <p>(Click anywhere to continue)</p>
      </div>
    </div>
  );
}
