import React, { useRef } from "react";

interface SnakeGameBoard {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  externalScore: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SnakeBoard({
  isPlaying,
  setIsPlaying,
  externalScore,
  setScore,
  setIsGameOver,
}: SnakeGameBoard) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  console.log(isPlaying,
      setIsPlaying,
      externalScore,
      setScore,
      setIsGameOver,)
  return (
    <div>
      <canvas
        className="block outline outline-2 outline-black m-0 bg-white"
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
