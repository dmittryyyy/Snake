import { HIGH_SCORE_KEY } from "../.././constants.ts";

type ModalProps = {
  title: string | null;
  text: string | null;
  prompt: string | null;
  finalScore: number;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setJustStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Modal = ({
  title,
  text,
  prompt,
  finalScore,
  setIsGameOver,
  setIsPlaying,
  setJustStarted,
  setScore,
}: ModalProps) => {
  const handleGameReset = () => {
    // restart
    setIsGameOver(false);
    setIsPlaying(true);
    setJustStarted(true);
    setScore(0);
  };

  const currentHighScore = Number(localStorage.getItem(HIGH_SCORE_KEY));
  const highScoreBeaten = finalScore > currentHighScore;
  if (highScoreBeaten) {
    localStorage.setItem(HIGH_SCORE_KEY, finalScore.toString());
  }

  return (
    <div
      className={
        title
          ? "bg-black bg-opacity-50 fixed h-full w-full"
          : "visibility: hidden pointer-events-none"
      }
      onClick={handleGameReset}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white border-2 rounded-xl border-gold">
        <p className="text-text-color-500 text-8xl font-bold mb-8">{title}</p>
        <p>{text}</p>
        <p>{prompt}</p>
      </div>
    </div>
  );
};

export default Modal;
