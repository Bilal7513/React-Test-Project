import React, { useState } from "react";

function Card() {
  const [isActive, setisActive] = useState(true);

  const handleClick = () => {
    return setisActive(!isActive);
  };

  return (
    <div className="my-14 mx-auto bg-[#171717] w-[70%] pt-[207px] rounded-[50px] h-[500px] overflow-hidden relative">
      <div className={`absolute w-full transition duration-300 delay-200 origin-left ${isActive ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <div className="bg-[#fd9512] w-full h-[85px]">
          <p className="text-black font-medium text-3xl ml-24 pt-5">
            www.yourwebsite.com
          </p>
        </div>
        <div className={`relative bg-[#fd9512] h-[350px] w-[350px] duration-500 ease-linear delay-500 rounded-full mt-[-220px] ml-[60%] ${isActive ? "scale-100" : "scale-0"}`}>
          <div className="absolute bg-[#171717] h-[300px] w-[300px] rounded-full ml-[25px] mt-[25px]">
            <img
              src="/Logo1.png"
              alt="Logo"
              className="w-2/4 ml-[75px] mt-[30px]"
            />
            <p className="text-white text-3xl text-center mt-4">
              Muhammad Bilal
            </p>
          </div>
        </div>
      </div>
      <div className={`transition duration-300 delay-200 origin-left ${isActive ? "translate-x-[-100%]" : "translate-x-0"}`}>
        <div className="bg-blue-600 w-full h-[85px]">
          <p className="text-white text-3xl ml-24 pt-5">www.yourwebsite.com</p>
        </div>
        <div className={`relative bg-blue-600 h-[350px] w-[350px] duration-500 ease-linear delay-500 rounded-full mt-[-220px] ml-[60%] ${isActive ? "scale-0" : "scale-100"}`}>
          <div className="absolute bg-[#171717] h-[300px] w-[300px] rounded-full ml-[25px] mt-[25px]">
            <img
              src="/Logo2.png"
              alt="Logo"
              className="w-2/4 ml-[75px] mt-[30px]"
            />
            <p className="text-white text-3xl text-center mt-4">
              Muhammad Bilal
            </p>
          </div>
        </div>
      </div>
      <button
        className={isActive
            ? "text-center mx-[41.5%] cursor-pointer rounded-lg ease-in duration-300 bg-[#fd9512] text-black p-4 font-medium text-xl"
            : "text-center mx-[41.5%] cursor-pointer rounded-lg ease-in duration-300 bg-blue-600 text-white p-4 font-medium text-xl"
        }
        onClick={handleClick}
      >
        Toggle Button
      </button>
    </div>
  );
}

export default Card;
