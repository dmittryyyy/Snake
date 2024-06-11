import clsx from "clsx";

type ScoreProps = {
  score: number;
  justStarted: boolean;
  className?: string;
};

const Score = ({ score, justStarted, className }: ScoreProps) => {
  return (
    <div
      className={clsx(
        "w-max flex items-center justify-center rounded-xl",
        className,
      )}
    >
      {justStarted ? (
        <p className="text-black animation: teeter 2s linear infinite mt-2 text-2xl">
          Click anywhere to start
        </p>
      ) : (
        <div className='flex items-center rounded-xl overflow-hidden'>
          <p className="min-w-24 bg-blue-100 p-5 text-2xl">Score:</p>
          <p className="min-w-24 bg-blue-50 p-4 font-black text-white font-bold text-4xl">
            {score}
          </p>
        </div>
      )}
    </div>
  );
};

export default Score;
