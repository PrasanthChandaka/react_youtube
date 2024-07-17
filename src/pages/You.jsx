import { CgProfile } from "react-icons/cg";
import Sidebar from "../components/Sidebar/Sidebar";

const You = () => {
  return (
    <div className="flex h-[100vh-56px] w-full">
      <Sidebar />
      <div className="h-screen w-full flex flex-col justify-center gap-5 items-center text-white text-center p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="120"
          viewBox="0 0 24 24"
          width="180"
          focusable="false"
          fill="white"
        >
          <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
        </svg>
        <h1 className="text-xl md:text-3xl">Enjoy your favorite videos</h1>
        <p className="text-sm md:text-md">
          Sign in to access videos that you’ve liked or saved
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

export default You;
