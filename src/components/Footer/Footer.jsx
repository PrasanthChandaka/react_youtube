import React from "react";
import { IoMdHome } from "react-icons/io";
import { LuPlusCircle } from "react-icons/lu";
import { MdOutlineLibraryAdd, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] border-t-[1px] text-white border-gray-500 flex min-[640px]:hidden h-[56px] w-full justify-around items-center fixed bottom-0">
      <NavLink to="/" className="flex items-center flex-col gap-1 w-[50px]">
        <IoMdHome size={20} />
        <p className="text-[12px]">Home</p>
      </NavLink>

      <NavLink
        to="/shorts"
        className="flex items-center flex-col gap-1 w-[50px]"
      >
        <SiYoutubeshorts size={20} />
        <p className="text-[12px]">Shorts</p>
      </NavLink>

      <button type="button" className="flex items-center w-[50px]">
        <LuPlusCircle size={40} />
      </button>

      <NavLink
        to="/subscriptions"
        className="flex items-center flex-col gap-1 w-[50px]"
      >
        <MdSubscriptions size={20} />
        <p className="text-[12px]">Subscriptions</p>
      </NavLink>

      <NavLink to="/you" className="flex items-center flex-col gap-1 w-[50px]">
        <MdOutlineLibraryAdd size={20} />
        <p className="text-[12px]">Library</p>
      </NavLink>
    </div>
  );
};

export default Footer;
