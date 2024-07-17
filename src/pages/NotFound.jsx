import { Link } from "react-router-dom";
import notfound from "../assets/undraw_back_home_nl-5-c.svg";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white gap-5 m-3">
      <img src={notfound} alt="home-icon" className="w-full max-w-[320px]" />
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <Link to="/">
        <button
          type="button"
          className="px-4 py-2 bg-white text-black font-semibold rounded-md"
        >
          Go to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
