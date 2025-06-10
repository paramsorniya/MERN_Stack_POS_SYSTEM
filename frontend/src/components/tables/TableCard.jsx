import React from "react";
import { getRandomBG } from "../../utils";
import { useNavigate } from "react-router-dom";

const TableCard = ({key,name,status , initials}) => {
  const navigate  = useNavigate();

  const handleClick = () => {
  if(status === "Booked") return;
  navigate('/menu');
};
  return (
    <div onClick={handleClick} key ={key} className="w-[270px]  hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer">
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-lg font-semibold">{name}</h1>
        <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-md`}>
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-8">
        <h1 className={` ${getRandomBG()} text-white rounded-full p-5 text-lg `}>
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
