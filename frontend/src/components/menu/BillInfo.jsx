import React from "react";

const BillInfo = () => {
  return (
    <>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Items (4)</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">240</h1>
      </div>
      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-xs text-[#ababab] font-medium mt-2">Tax (5.25%)</p>
        <h1 className="text-[#f5f5f5] text-md font-bold">24</h1>
      </div>
      <div className="flex items-center gap-3 px-5 mt-4">
        <button
          className="bg-[#1f1f1f] px-4 py-2 w-full mounded-1g text-[#ababab] 
font-semibold"
        >
          Cash
        </button>
        <button
          className="bg-[#1f1f1f] px-4 py-2 w-full rounded-1g text-[#ababab] 
font-semibold"
        >
          Online
        </button>
      </div>

      <div className="flex items-center gap-3 px-5 mt-3">
        <button
          className="bg-[#025cca] px-4 py-2 w-full mounded-1g text-[#f5f5f5] 
font-semibold"
        >
          Print Receipt
        </button>
        <button
          className="bg-[#f6b100] px-4 py-2 w-full rounded-1g text-[#1f1f1f] 
font-semibold"
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default BillInfo;
