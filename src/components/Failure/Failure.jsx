import img from "../../assets/undraw_refreshing_beverage_td3r.svg";

const Failure = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-5 justify-center items-center p-5 text-[grey]">
      <img src={img} alt="error-img" className="max-w-[120px] max-h-[120px]" />
      <p>Something Went Wrong!</p>
      <button
        type="button"
        className="px-4 text-white font-semibold py-2 rounded-md bg-blue-600 border-none"
      >
        Refresh
      </button>
    </div>
  );
};

export default Failure;
