import { ScoreProps } from "../../types/score.ts";

const HighScore = ({ score }: ScoreProps) => {
  return (
    <div className="flex items-center p-4 rounded-xl bg-blue-50 text-2xl font-semibold">
      <p>High Score:</p>
      <span className="ml-4 font-black text-4xl text-white">{score}</span>
    </div>
  );
};

export default HighScore;
