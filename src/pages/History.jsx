import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { GrHistory } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const History = () => {
  return (
    <div className="flex h-[100vh-56px] w-full">
      <Sidebar />
      <div className="h-screen w-full flex flex-col justify-center gap-5 items-center text-white text-center p-3">
        <GrHistory size={100} />
        <h1 className="text-xl md:text-3xl">Keep track of what you watch</h1>
        <p className="text-sm md:text-md">
          Watch history isn't viewable when signed out.
        </p>
        <button
          type="button"
          className="h-[40px] w-[100px] border border-[#262626] p-2  text-sm text-blue-500 hover:bg-[#263850] rounded-full flex items-center gap-2"
        >
          <CgProfile size={24} className="blue-500" />
          Sign in
        </button>
      </div>
    </div>
  );
};

export default History;
