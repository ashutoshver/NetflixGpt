// import React from 'react'
// import { FaPlay } from "react-icons/fa";
// import { IoIosInformationCircleOutline } from "react-icons/io";

// const VideoTitle = ({title, overview}) => {
//   return (
//     <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
//         <h1 className='text-6xl font-bold'>{title}</h1>
//         <p className='py-6 text-lg w-[90%] max-w-md sm:max-w-lg md:max-w-[50%] lg:max-w-[30%] xl:max-w-[40%]'>{overview}</p>
//         <div className='flex gap-2'>
//             <button className='bg-white text-black rounded-lg py-1 px-10 text-lg flex items-center gap-2 cursor-pointer hover:opacity-80'><FaPlay />Play</button>
//             <button className='bg-gray-500 rounded-lg py-1 px-10 text-lg flex items-center gap-2 opacity-60'><IoIosInformationCircleOutline />More Info</button>
//         </div>
//     </div>
//   )
// }

// export default VideoTitle

import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video xl:pt-[15%] lg:pt-[20%] sm:pt-0 px-6 sm:px-12 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{title}</h1>
      <p className="py-4 text-sm sm:text-base md:text-lg w-[90%] sm:max-w-lg md:max-w-[50%] lg:max-w-[30%] xl:max-w-[40%]">
        {overview}
      </p>
      <div className="flex gap-2">
        <button className="bg-white text-black rounded-lg py-1 px-6 sm:px-10 text-sm sm:text-lg flex items-center gap-2 cursor-pointer hover:opacity-80">
          <FaPlay />
          Play
        </button>
        <button className="bg-gray-500 rounded-lg py-1 px-6 sm:px-10 text-sm sm:text-lg flex items-center gap-2 opacity-60">
          <IoIosInformationCircleOutline />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
