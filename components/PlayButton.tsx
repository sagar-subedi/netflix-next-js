import { BsPlayCircle } from "react-icons/bs";

import { useRouter } from "next/router";
import React from "react";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/watch/${movieId}`);
      }}
      className="
        flex gap-1
        items-center
        bg-white
        text-white
        bg-opacity-60 hover:bg-opacity-20
        px-2
        py-1
        rounded-md
        text-xs"
    >
      <BsPlayCircle></BsPlayCircle>
      Play
    </button>
  );
};

export default PlayButton;
