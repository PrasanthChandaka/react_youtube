import { useEffect, useState } from "react";
import moment from "moment/moment";
import { truncate, totalViews } from "../Constants/Constants";
import Loading from "../Loading/Loading";
import img from "../../assets/undraw_refreshing_beverage_td3r.svg";

const apiStatusConstants = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const Feed = () => {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(apiStatusConstants.initial);
  const youtubeApi = async () => {
    setRender(apiStatusConstants.loading);
    const url =
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=0&key=AIzaSyCk_2z6u-dITKMVL-DufZuDflMSHrTAnZk";

    const response = await fetch(url);
    const result = await response.json();
    console.log(response);
    if (response.ok) {
      setRender(apiStatusConstants.success);
      setData(result.items);
    } else {
      setRender(apiStatusConstants.error);
    }
  };
  useEffect(() => {
    youtubeApi();
  }, []);

  const conditionalRender = () => {
    switch (render) {
      case apiStatusConstants.loading:
        return <Loading />;
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.error:
        return renderFailureView();
      default:
        return null;
    }
  };

  const renderSuccessView = () => {
    return (
      <div className="h-screen w-full overflow-y-auto grid max-[576px]:grid-cols-1 min-[576px]:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 text-white p-5 pb-32">
        {data.map((each, index) => (
          <div key={index}>
            <img
              src={each.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="w-full object-fill rounded-xl hover:rounded-none hover:scale-[1.005] transition-all"
            />

            <div className="m-2">
              <h1 className="font-semibold text-heading">
                {truncate(each.snippet.title)}
              </h1>
              <p className="text-para font-medium text-[grey]">
                {each.snippet.channelTitle}
              </p>
              <p className="text-para font-medium text-[grey]">
                {totalViews(each.statistics.viewCount)} •
                <span> {moment(each.snippet.publishedAt).fromNow()}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderFailureView = () => {
    return (
      <div className="h-screen w-full flex flex-col gap-5 justify-center items-center p-5 text-[grey]">
        <img
          src={img}
          alt="error-img"
          className="max-w-[120px] max-h-[120px]"
        />
        <p>Something Went Wrong!</p>
        <button
          type="button"
          className="px-4 text-white font-semibold py-2 rounded-md bg-blue-600 border-none"
          onClick={() => youtubeApi()}
        >
          Refresh
        </button>
      </div>
    );
  };

  return conditionalRender();
};

export default Feed;
