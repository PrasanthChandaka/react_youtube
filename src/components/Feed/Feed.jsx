import { useEffect, useState } from "react";
import moment from "moment/moment";
import { truncate, totalViews } from "../Constants/Constants";
const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const youtubeApi = async () => {
      const url =
        "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=0&key=AIzaSyCk_2z6u-dITKMVL-DufZuDflMSHrTAnZk";

      const response = await fetch(url);
      const result = await response.json();
      setData(result.items);
    };
    youtubeApi();
  }, []);

  return (
    <div className="h-screen w-full overflow-y-auto grid max-[576px]:grid-cols-1 min-[576px]:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 text-white p-5 pb-32">
      {data.map((each, index) => (
        <div key={index} className="">
          <img
            src={each.snippet.thumbnails.medium.url}
            alt="thumbnail"
            className="w-full object-fill rounded-md"
          />
          <div className="m-2">
            <h1 className="font-semibold text-heading">
              {truncate(each.snippet.title)}
            </h1>
            <p className="text-base font-medium text-[grey]">
              {each.snippet.channelTitle}
            </p>
            <p className="text-base font-medium text-[grey]">
              {totalViews(each.statistics.viewCount)} •
              <span> {moment(each.snippet.publishedAt).fromNow()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
