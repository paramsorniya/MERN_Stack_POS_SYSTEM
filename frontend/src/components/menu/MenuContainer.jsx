import React from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState();

  const Increment = (id) => {
    setItemId(id);
    if (itemCount >= 50) return;
    setItemCount((prev) => prev + 1);
  };

  const Decrement = () => {
    setItemId(id);
    if (itemCount <= 0) return;
    setItemCount((prev) => prev - 1);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemId(0);
                setItemCount(0)
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4 " />

      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {selected?.items.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[130px] bg-[#1a1a1a] cursor-pointer hover:bg-[#2a2a2a]"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-md font-semibold">
                {menu.name}
              </h1>
              <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg"><FaShoppingCart size={15}/></button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#f5f5f5] text-lg font-semibold">
                  ₹{menu.price}
                </p>
                <div className="flex gap-6 items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg z-20">
                  <button
                    onClick={() => Decrement(menu.id)}
                    className="text-yellow-500 text-2x1"
                  >
                    &minus;
                  </button>
                  <span className="text-white">
                    {menu.id === itemId ? itemCount : "0"}
                  </span>
                  <button
                    onClick={() => Increment(menu.id)}
                    className="text-yellow-500 text-2x1"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
