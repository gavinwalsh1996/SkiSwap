import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MarketplaceDashboard = () => {
  return (
    <div className="p-10 flex flex-col gap-16 border-2">

        <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Bataleon Partywave</h2>
                <div className="flex gap-5">
                    <span className="cursor-pointer"><DeleteIcon/></span>
                    <span className="cursor-pointer"><EditIcon/></span>
                    <span className="cursor-pointer"><MoreVertIcon/></span>
                </div>
        </div>

      <div className="flex mt-4">
        <div className="w-1/3 text-center flex flex-col">
            <span className="font-bold">Date</span>
            <span>14.09.2023</span>
        </div>
        <div className="w-1/3 text-center">Price</div>
        <div className="w-1/3 text-center">Favorited</div>
        <div className="w-1/3 text-center">Favorited</div>
        <div className="w-1/3 text-center">Favorited</div>
      </div>
      
    </div>
  );
};

export default MarketplaceDashboard;
