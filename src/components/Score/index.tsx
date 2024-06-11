import { ScoreProps } from "../../types/score.ts";

const Score = ({ score }: ScoreProps) => {
  return (
    <div className="w-max flex items-center justify-center rounded-xl text-white text-2xl">
      <p className="min-w-24 bg-blue-100 py-8 px-4 rounded-l-xl">Score:</p>
      <p className="min-w-24 bg-blue-50 rounded-r-xl p-8 font-black text-white">
        {score}
      </p>
    </div>
  );
};

export default Score;
