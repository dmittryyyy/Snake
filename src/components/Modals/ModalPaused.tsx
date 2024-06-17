import React from "react";

interface PausedModalProps {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PausedModal({ setIsPlaying }: PausedModalProps) {
  return (
    <div
      className="bg-black bg-opacity-50 fixed h-full w-full"
      onClick={() => setIsPlaying((prevIsPlaying) => !prevIsPlaying)}
    >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-8 bg-white border-2 rounded-xl border-gold">
        <h2 className="text-text-color-500 text-8xl font-bold mb-8">Paused</h2>
        <p>(Click anywhere to continue)</p>
      </div>
    </div>
  );
}
