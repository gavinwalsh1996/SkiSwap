import React, { useState } from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const UserDashboard = ({ data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { heading, subHeading, image, paragraph } = data;

  window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

  return (
    <div className="flex items-center justify-center p-10">
      <img
        src={image}
        id='reload'
        alt="Profile"
        className="w-16 h-16 rounded-full"
      />
      <div className="ml-10">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="text-gray-600 font-bold">{subHeading}</p>
        <div className="flex gap-2">
          <p className="text-gray-600">{paragraph}</p>
          <MoreHorizIcon
            sx={{ cursor: 'pointer' }}
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="absolute top-52 mt-2 bg-white py-2 rounded-lg shadow-md">
              <div className="px-3 py-1 cursor-pointer">Edit Name</div>
              <div className="px-3 py-1 cursor-pointer">Edit Location</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
