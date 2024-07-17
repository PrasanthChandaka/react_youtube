import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { store } from "../context";
import moment from "moment/moment";
import { truncate, totalViews } from "../components/Constants/Constants";
import Sidebar from "../components/Sidebar/Sidebar";
import { BsThreeDotsVertical } from "react-icons/bs";
import Loading from "../components/Loading/Loading";

const apiStatusConstants = {
  initial: "INITIAL",
  loading: "LOADING",
  success: "SUCCESS",
  error: "ERROR",
};

const categoryImage = {
  Trending: {
    title: "Trending",
    url: "https://www.youtube.com/img/trending/avatar/trending.png",
  },
  Shoping: {
    title: "Shopping",
    url: "//yt3.googleusercontent.com/NJIccYSP-bBVXU_VFg43O9n86rzq91y3nO4XkB3I7nwN105odDgrjtuouZELyxogmqzjRoHJSL4=s72-c-k-c0x00ffffff-no-rj",
  },
  Music: {
    title: "Music",
    url: "//yt3.googleusercontent.com/vCqmJ7cdUYpvR0bqLpWIe8ktaor4QafQLlfQyTuZy-M9W_YafT8Wo9kdsKL2St1BrkMRpVSJgA=s88-c-k-c0x00ffffff-no-rj-mo",
  },
  Entertainment: {
    title: "Entertainment",
    url: "https://www.gstatic.com/youtube/img/tvfilm/clapperboard_profile.png",
  },
  Gaming: {
    title: "Gaming",
    url: "//yt3.googleusercontent.com/pzvUHajbQDLDt63gKFYUX445k3VprUs8CeJFpNTxGQZlk0grOSkAqU8Th1_C97dyYM3nENgjbw=s72-c-k-c0x00ffffff-no-rj",
  },
  News: {
    title: "News",
    url: "https://img.freepik.com/premium-vector/glove-logo_590037-181.jpg?w=740",
  },
  Sports: {
    title: "Sports",
    url: "//yt3.googleusercontent.com/mUhuJiCiL8jf0Ngf9sh7BFBZCO0MUL2JyH_5ElHbV2fd13hxZ9zQ3-x-YePA_-PCUUH360G0=s88-c-k-c0x00ffffff-no-rj-mo",
  },

  Pets: {
    title: "Pets & Animals",
    url: "https://static.thenounproject.com/png/4729907-200.png",
  },
  Podcasts: {
    title: "Podcasts",
    url: "https://www.youtube.com/img/podcasts/avatar/avatar_color_v3_circle_100x100.png",
  },
};

const Category = () => {
  const params = useParams();
  const [status, setStatus] = useState(apiStatusConstants.initial);
  const { category } = useContext(store);
  const [data, setData] = useState([]);
  const { setChannelObject } = useContext(store);

  const fetchList = async () => {
    setStatus(apiStatusConstants.loading);
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=AIzaSyCk_2z6u-dITKMVL-DufZuDflMSHrTAnZk`;
    const response = await fetch(url);
    const result = await response.json();
    if (response.ok) {
      setStatus(apiStatusConstants.success);
      setData([...result.items]);
    } else {
      setStatus(apiStatusConstants.error);
      setData([]);
    }
  };

  useEffect(() => {
    fetchList();
  }, [category]);

  const CategoryImageRender = () => {
    const params = useParams();
    switch (params.id) {
      case categoryImage.Trending.title:
        return categoryImage.Trending.url;
      case categoryImage.Shoping.title:
        return categoryImage.Shoping.url;
      case categoryImage.Music.title:
        return categoryImage.Music.url;
      case categoryImage.Entertainment.title:
        return categoryImage.Entertainment.url;
      case categoryImage.Gaming.title:
        return categoryImage.Gaming.url;
      case categoryImage.News.title:
        return categoryImage.News.url;
      case categoryImage.Sports.title:
        return categoryImage.Sports.url;
      case categoryImage.Pets.title:
        return categoryImage.Pets.url;
      case categoryImage.Podcasts.title:
        return categoryImage.Podcasts.url;
      default:
        return null;
    }
  };

  const renderSuccessView = () => {
    return (
      <div className="h-screen min-[1080px]:ml-20 text-white w-full overflow-y-auto flex flex-col gap-5 pt-0 p-5">
        <div className="flex gap-5 items-center">
          <img
            src={CategoryImageRender()}
            alt={params.id}
            className="rounded-full h-20 w-20"
          />
          <h1 className="text-4xl font-bold">{params.id}</h1>
        </div>
        {data.map((each, index) => (
          <Link
            to={`/${each.snippet.categoryId}/${each.id}`}
            onClick={() => setChannelObject(each.snippet.channelId)}
            key={index}
            className="flex flex-col min-[640px]:flex-row gap-3"
          >
            <div className="rounded-xl overflow-hidden min-w-[220px]">
              <img
                className="h-full w-full object-cover"
                src={each.snippet.thumbnails.medium.url}
                alt="trending"
              />
            </div>
            <div className="w-full max-w-[600px] p-2 relative">
              <div className="flex justify-between ">
                <h1 className="font-semibold text-heading max-w-[90%]">
                  {truncate(each.snippet.title)}
                </h1>
                <button type="button">
                  <BsThreeDotsVertical size={20} />
                </button>
              </div>
              <p className="text-base font-medium text-[grey]">
                {each.snippet.channelTitle}
              </p>
              <p className="text-base font-medium text-[grey]">
                {totalViews(each.statistics.viewCount)} •
                <span> {moment(each.snippet.publishedAt).fromNow()}</span>
              </p>
            </div>
          </Link>
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

  const conditionalRender = () => {
    switch (status) {
      case apiStatusConstants.loading:
        return <Loading />;
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      {conditionalRender()}
    </div>
  );
};

export default Category;
