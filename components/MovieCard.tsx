import React from "react";
import {BsPlayCircle} from "react-icons/bs"
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div className="relative cursor-pointer group">
      <img
        className="group-hover:opacity-0"
        src={data.thumbnailUrl}
        alt="Thumbnail"
      />

      <div
        className="
      absolute top-0
      opacity-0 group-hover:opacity-100
      scale-0 group-hover:scale-110
      z-10
      "
      >
        <img className="" src={data.thumbnailUrl} alt="Thumbnail" />
        <div
          className="
        bg-zinc-800
        "
        >
          <div className="flex pt-2 gap-1 items-center">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center cursor-pointer
             w-6
              h-6
              bg-white rounded-full"
              onClick={()=>{router.push(`/watch/${data?.id}`)}}><BsPlayCircle/></div>
          </div>
          <FavouriteButton movieId={data?.id}/>
          </div>
          <p className="text-green-400 font-semibold mt-2 text-[12px]">
            New <span className="text-white">2023</span>
          </p>
          <div>
            <p className="text-white text-[10px]">
              {data.duration}
            </p>
          </div>
          <div>
            <p className="text-white text-[10px]">
              {data.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
