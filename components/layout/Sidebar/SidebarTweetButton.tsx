import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { FaFeather } from "react-icons/fa";
import useLoganModal from "../../../Hooks/useLoginModel";
const SidebarTweetButton = () => {
  const router = useRouter();
  const loganModel =useLoganModal();
  const onClick = useCallback(()=>{
        loganModel.onOpen();
  },[loganModel])
  return (
    <div onClick={onClick}>
      <div className=" rounded-full lg:hidden bg-sky-500 flex items-center transition hover:bg-opacity-80 p-4 justify-center w-14 h-14">
        <FaFeather size={24} color="white" />
      </div>
      <div className=" mt-6 rounded-full hidden lg:flex bg-sky-500  items-center p-2 transition hover:bg-opacity-90  justify-center">
        <FaFeather size={24} color="white" />
        <p className=" mx-2 text-white font-semibold text-lg text-center">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
