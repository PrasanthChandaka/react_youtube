import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-start pt-20">
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="white"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
