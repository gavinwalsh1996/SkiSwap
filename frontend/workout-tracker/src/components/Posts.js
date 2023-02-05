import React from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MarketplaceDashboard = () => {
  return (
    <div className="p-10">
      <div className="flex justify-around">
        <h2 className="text-2xl font-bold">Your Postings</h2>
        <h2 className="text-2xl font-bold">All Postings <ArrowRightAltIcon/></h2>
      </div>
      <div className="flex items-center justify-around mt-4 gap-4">
        <div className="flex gap-2">
        <button className="bg-yellow-400 text-black hover:bg-yellow-300 py-2 px-4 rounded-full">
          Active(2)
        </button>
        <button className="bg-yellow-400 text-black hover:bg-yellow-300 py-2 px-4 rounded-full">
          All(5)
        </button>
        </div>
        <div className="relative w-64">
          <input
            type="text"
            className="bg-gray-200 p-2 rounded-full w-full"
            placeholder="Search job postings"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketplaceDashboard;
