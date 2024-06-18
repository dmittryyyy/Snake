import React, { useRef, useEffect } from "react";
import { SnakeGameEngine } from "./Game";

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
  const context = useRef<CanvasRenderingContext2D | null>(null);

  const snakes = useRef<SnakeGameEngine | null>(null);

  const canvasSidesLength = 500; // in px

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = canvasSidesLength;
      canvasRef.current.height = canvasSidesLength;
      context.current = canvasRef.current.getContext("2d");

      if (context.current) {
        const ctx = context.current;
        snakes.current = new SnakeGameEngine(
          ctx,
          canvasSidesLength,
          externalScore,
          setScore,
          setIsGameOver,
          isPlaying,
        );
        const snakeGame = snakes.current;

        window.onkeydown = (e) => {
          switch (e.key) {
            case "w":
            case "ArrowUp":
              snakeGame.snake.changeMovement("to top");
              e.preventDefault();
              break;
            case "s":
            case "ArrowDown":
              snakeGame.snake.changeMovement("to bottom");
              e.preventDefault();
              break;
            case "d":
            case "ArrowRight":
              snakeGame.snake.changeMovement("to right");
              e.preventDefault();
              break;
            case "a":
            case "ArrowLeft":
              snakeGame.snake.changeMovement("to left");
              e.preventDefault();
              break;
            case "Escape":
              setIsPlaying((prevIsPlaying) => {
                return !prevIsPlaying;
              });
              break;
            default:
              break;
          }
        };
      }

      return () => {
        canvasRef.current = null;
        context.current = null;
        snakes.current = null;
      };
    }
  }, [externalScore, isPlaying, setIsGameOver, setIsPlaying, setScore]);

  useEffect(() => {
    if (snakes.current) {
      snakes.current.animate(isPlaying);
    }
  }, [isPlaying]);

  return (
    <div>
      <canvas
        className="block outline outline-2 outline-black m-0 m-auto bg-white"
        ref={canvasRef}
      ></canvas>
    </div>
  );
}
