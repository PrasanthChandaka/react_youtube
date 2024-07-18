import Sidebar from "../components/Sidebar/Sidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import ReactPlayer from "react-player";

const Shorts = () => {
  const [shortsData, setShortsData] = useState();
  const slideRef = useRef();

  useEffect(() => {
    const shortsDataApi = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=17&key=${
        import.meta.env.VITE_REACT_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();

      setShortsData(data.items);
      console.log(data.items);
    };
    shortsDataApi();
  }, []);

  const slideDown = () => {
    slideRef.current.swiper.slideNext();
  };

  const slideUp = () => {
    slideRef.current.swiper.slidePrev();
  };

  return (
    <div className="flex h-[calc(100vh-56px)] w-full">
      <Sidebar />
      <div className="h-full w-full relative">
        <div className="absolute right-[90px] top-[35%] hidden flex-col gap-5 xl:flex">
          <button
            onClick={slideUp}
            type="button"
            className="bg-[#262626] hover:bg-[#525252] h-16 w-16 rounded-full"
          >
            <IoArrowUp size={30} color="white" className="mx-auto my-auto" />
          </button>
          <button
            onClick={slideDown}
            type="button"
            className="bg-[#262626] hover:bg-[#525252] h-16 w-16 rounded-full"
          >
            <IoArrowDown size={30} color="white" className="mx-auto my-auto" />
          </button>
        </div>
        <Swiper
          ref={slideRef}
          direction={"vertical"}
          className="w-full min-[640px]:max-w-[400px] max-h-[900px] h-full md:rounded-xl mx-auto z-[-1]"
        >
          {shortsData &&
            shortsData.map((each) => (
              <SwiperSlide key={each.id} className="h-full w-full">
                {({ isActive }) => (
                  <ReactPlayer
                    url={`https://www.youtube.com/embed/${each.id}`}
                    width="100%"
                    height="100%"
                    playing={isActive ? true : false}
                    loop={true}
                  />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Shorts;
