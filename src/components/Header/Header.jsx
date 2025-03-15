import React from "react";
import { ImageUrl } from "../../utils/constant/ImageUrl";

const Header = () => {
  return (
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44 " src={ImageUrl.NETFLIX_LOGO} accessKey="netflix-icon" />
    </div>
  );
};

export default Header;
