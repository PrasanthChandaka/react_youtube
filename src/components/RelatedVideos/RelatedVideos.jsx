import { useContext, useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import { totalViews } from "../Constants/Constants";
import moment from "moment";
import { Link } from "react-router-dom";
import { store } from "../../context";

const RelatedVideos = ({ categoryId }) => {
  const [data, setData] = useState([]);
  const { setChannelObject } = useContext(store);

  const truncate = (text, count) => {
    return text.length > count ? text.substring(0, count) + "..." : text;
  };

  useEffect(() => {
    const youtubeApi = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${categoryId}&key=${
        import.meta.env.VITE_REACT_API_KEY
      }`;

      const response = await fetch(url);
      const result = await response.json();
      setData(result.items);
    };
    youtubeApi();
  }, [categoryId]);
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {data &&
        data.map((each, index) => (
          <Link
            to={`/${each.snippet.categoryId}/${each.id}`}
            key={index}
            className="flex gap-2 text-white max-[440px]:flex-col"
            onClick={() => setChannelObject(each.snippet.channelId)}
          >
            <div className="w-full min-[440px]:max-w-[240px]">
              <img
                src={each.snippet.thumbnails.medium.url}
                alt="video-img"
                className="rounded-md h-full w-full"
              />
            </div>
            <div className="w-full flex justify-between ">
              <div>
                <h1 className="text-sm font-semibold">
                  {truncate(each.snippet.title, 50)}
                </h1>
                <p className="text-[grey] font-medium text-sm">
                  {truncate(each.snippet.channelTitle, 20)}
                </p>
                <p className="text-sm font-medium text-[grey]">
                  {totalViews(each.statistics.viewCount)} •
                  <span> {moment(each.snippet.publishedAt).fromNow()}</span>
                </p>
              </div>
              <div>
                <IoMdMore size={20} className="cursor-pointer" />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default RelatedVideos;
