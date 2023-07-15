import  useInfoModal  from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import {AiOutlineClose } from 'react-icons/ai'
import PlayButton from "./PlayButton";
import FavouriteButton from "./FavouriteButton";
interface InfomodalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfomodalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  console.log(movieId);
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }
  return (
    <div
      className="z-50 fixed
    inset-0
    bg-black
    bg-opacity-80
    flex items-center justify-center
    "
    >
      <div className='mx-auto max-w-3xl rounded-md'>
        <div
          className={`${isVisible ? "scale-100" : "scale-0"} bg-zinc-900 rounded-md`}
        >
          <div
            className="
            relative h-96
            
            "
          >
            <video
              className="
                h-full w-full
                object-cover
                bg-opacity-80
                brightness-[60%]"
              autoPlay
              muted
              loop
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
            ></video>
            <div
            onClick={handleClose}
            className="
            cursor-pointer
            absolute
            top-3 right-3
            h-10 w-10
            rounded-full
            bg-black bg-opacity-70
            flex items-center justify-center
            ">
              <AiOutlineClose className="text-white"></AiOutlineClose>
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl">
                {data?.title}
              </p>
              <div className="flex gap-1">
                <PlayButton movieId={data?.id}/>
                <FavouriteButton movieId={data?.id}/> 
              </div>
            </div>
          </div>
          <div className="py-8 px-12">
            <p className="text-green-400 font-semibold text-lg">New</p>
            <p className="text-white text-lg">{data?.duration}</p>
            <p className="text-white text-lg">{data?.genre}</p>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
