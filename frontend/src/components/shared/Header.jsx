import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-8 bg-[#1a1a1a]">
      <div>
        {/* <img src={logo} className='h-8 w-8' alt="restro logo"/> */}
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] "
        />
      </div>

      {/* Logged user details */}

      <div className=" flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl"></FaBell>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">Param </h1>
            <p className="text-xs text-[#f5f5f5] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
