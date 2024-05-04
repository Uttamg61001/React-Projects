import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
function CallModel() {
  return (
    <div className="w-full">
      <div className="bg-[#FFD24E] text-black p-5 sm:px-14 py-4">
        <div className="flex gap-4 items-center ">
          <div className="my-auto bg-blue-500 text-white  rounded-sm">
            <IoIosArrowBack size={22} />
          </div>
          <h5 className=" font-semibold text-md sm:text-xl">Rahul</h5>
        </div>
      </div>
      <div className="flex  justify-center items-center  ">
        <div className="  bg-gray-200 p-4 relative h-[85vh] w-[800px]  pt-14 items-center flex flex-col gap-10">
          <img
            className="w-64 h-64 rounded-full "
            src="./image 20.png"
            alt="videoCallImage"
          />

          <div>

          <h1 className='font-semibold text-2xl'>Rahul</h1>
          <h4 className='text-gray-400 text-2xl'>Calling</h4>
          </div>
          <button className=" absolute bottom-10 left-[45%] sm:[50%] text-2xl p-3 bg-red-600 rounded-full  text-white">
        <RxCross2 />

        </button>
        </div>
        
      </div>
    </div>
  )
}

export default CallModel
