import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


function VideoModel() {
  return (
    <div className="w-full">
      <div className="bg-blue-700 text-white p-5 sm:px-14 py-4">
        <div className="flex gap-4 items-center ">
          <div className="my-auto bg-[#FBBC05]  rounded-sm">
            <IoIosArrowBack size={22} />
          </div>
          <h5 className=" font-semibold text-md sm:text-xl">Rahul</h5>
        </div>
      </div>
      <div className="flex  justify-center items-center ">
        <div className="  bg-gray-200 p-4 relative">
          <div className="absolute right-4 top-4 sm:top-10 sm:right-10">
            <img src="./Group 41.png" alt="videoCallImage" />
          </div>
          <img
            className="h-[85vh] object-contain"
            src="./image 20.png"
            alt="videoCallImage"
          />
          <button className=" absolute bottom-10 left-[45%] sm:[50%] text-2xl p-3 bg-red-600 rounded-full  text-white">
        <RxCross2 />

        </button>
        </div>
        
      </div>
    </div>
  );
}

export default VideoModel;
