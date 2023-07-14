import useCurrentUser from "@/hooks/useCurrentUser";
import useFavourites from "@/hooks/useFavourites";
import React, { useMemo } from "react";
import { BsFillBookmarkCheckFill, BsBookmarkPlus } from "react-icons/bs";
import { useCallback } from "react";
import axios from "axios";


interface FavouriteButtonProps {
  movieId: string;
}

const FavouriteButton: React.FC<FavouriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: currentUser, mutate } = useCurrentUser();

  const isFavourite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    console.log(currentUser);
    console.log(list);
    return list.includes(movieId);
  }, [currentUser, movieId]);

  
  const toggleFavourites = useCallback(async () => {
    let response;
    if (isFavourite) {
      alert("delete called");
      response = await axios.delete("/api/favourite", {
        data: { movieId },
      });
    } else {
      alert("add called");
      response = await axios.post("/api/favourite", { movieId });
    }
    const updatedFavouriteIds = response?.data?.favoutiteIds;
    await mutate({
      ...currentUser,
      favouriteIds: updatedFavouriteIds,
    });

    await mutateFavourites();
  }, [movieId, isFavourite, currentUser, mutate, mutateFavourites]);



  const Icon = !isFavourite ? (
    <BsBookmarkPlus size={13} />
  ) : (
    <BsFillBookmarkCheckFill />
  );


  return (
    <div
      onClick={toggleFavourites}
      
      className="flex w-6 h-6 cursor-pointer
    rounded-full
     justify-center
     items-center
     text-black
     bg-white
     border-2 border-white"
    >
      {Icon}
    </div>
  );
};

export default FavouriteButton;
