import clsx from "clsx";

type HighScoreProps = {
  score: number;
  className?: string;
};

const HighScore = ({ score, className }: HighScoreProps) => {
  return (
    <div
      className={clsx(
        "flex items-center rounded-xl bg-blue-50 p-4 font-semibold max-h-32 pointer-events-none",
        className,
      )}
    >
      <p className="text-4xl">High Score:</p>
      <span className="ml-4 font-black text-4xl text-white">{score}</span>
    </div>
  );
};

export default HighScore;
