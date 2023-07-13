import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const GG = () => {
  return (
    <div className="flex gap-4 items-center justify-center py-3 cursor-pointer">
      <div onClick={()=>{signIn('google', {
        callbackUrl: '/profiles',
      })}}>
        <FaGoogle size={30} color="white" />
      </div>
      <div onClick={()=>{
        signIn('github', {
          callbackUrl: '/profiles',
        })
      }}>
        <FaGithub size={30} color="white" />
      </div>
    </div>
  );
};

export default GG;
