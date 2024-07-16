import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { likesCount } from "../components/Constants/Constants";
import { BiDislike } from "react-icons/bi";
import { TfiDownload } from "react-icons/tfi";
import { PiShareFatThin } from "react-icons/pi";
import Comments from "../components/Comments/Comments";

const Player = () => {
  const { categoryId, id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const videoDetailsApi = async () => {
      //api call to fetch video details and update the state
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&regionCode=IN&key=${
        import.meta.env.VITE_REACT_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.items[0]);
      setDetails(data.items[0]);
    };
    videoDetailsApi();
  }, [id]);

  return (
    <div className="flex h-[calc(100vh-56px)] w-full px-[5%] overflow-y-auto py-5">
      <div className="w-full h-full flex flex-col xl:flex-row gap-5">
        <div className="w-full min-w-[65%] flex flex-col h-full bg-cover">
          <div className="h-[250px] sm:[350px] md:h-[460px] rounded-xl">
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              width="100%"
              height="100%"
              controls={true}
              muted={true}
            />
          </div>

          <div className="text-white w-full">
            <p className="text-md md:text-xl mt-2">
              {details && details.snippet.title}
            </p>
            <div className="flex my-4 justify-between max-[900px]:flex-col gap-5 text-sm">
              <div className="flex gap-5 w-full max-[900px]:justify-between">
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-full flex justify-center items-center bg-[grey]">
                    P
                  </div>
                  <div className="text-xs sm:text-sm md:text-md">
                    <p>{details && details.snippet.channelTitle}</p>
                    <p>10.8k Subscribers</p>
                  </div>
                </div>
                <div className="flex gap-2 h-10 font-semibold ">
                  <button
                    type="button"
                    className="py-2 px-2 text-center bg-white text-black rounded-full hover:bg-[#D9D9D9]"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex gap-2 w-full overflow-x-auto no-scrollbar min-[900px]:justify-end">
                <div className="bg-[#272727] rounded-full h-10 px-2 py-2 flex items-center gap-3 hover:bg-[#3F3F3F]">
                  <button type="button" className="flex items-center gap-2">
                    <AiOutlineLike size={25} />
                    <span>
                      {likesCount(details && details.statistics.likeCount)}
                    </span>
                  </button>
                  |
                  <button type="button">
                    <BiDislike size={25} />
                  </button>
                </div>
                <div className="bg-[#272727] rounded-full h-10 px-2 py-2 flex items-center gap-3 hover:bg-[#3F3F3F]">
                  <button type="button" className="flex items-center gap-2">
                    <PiShareFatThin size={25} />
                    <span>Share</span>
                  </button>
                </div>
                <div className="bg-[#272727] rounded-full h-10 px-2 py-2 flex items-center gap-3 hover:bg-[#3F3F3F]">
                  <button type="button" className="flex items-center gap-2">
                    <TfiDownload size={15} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="h-full w-full bg-[grey] rounded-xl p-3 overflow-y-auto">
            <h1 className="text-white text-xl font-bold">Comments</h1>
            <Comments id={id} />
          </div> */}
        </div>

        <RelatedVideos categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Player;
