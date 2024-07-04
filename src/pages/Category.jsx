import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { store } from "../context";
import moment from "moment/moment";
import { truncate, totalViews } from "../components/Constants/Constants";
import Sidebar from "../components/Sidebar/Sidebar";
import { BsThreeDotsVertical } from "react-icons/bs";

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
  Movies: {
    title: "Movies",
    url: "https://www.gstatic.com/youtube/img/tvfilm/clapperboard_profile.png",
  },
  Live: {
    title: "Live",
    url: "//yt3.googleusercontent.com/uL4xlF3_o_605wg887ENKIaMdEwJn5aP5t-r7HRpQshXL5gIn2AKfNfjZkRN15kTcgS3wK7c=s72-c-k-c0x00ffffff-no-rj",
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
  Courses: {
    title: "Courses",
    url: "https://yt3.googleusercontent.com/WqGyfnVyCluIyyFDPdrHzqEfKQcTbtwhIJJ4Q_F3QGMqnYNs8aKswvDhzpY1q8vhS5g8Expi=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  Fashion: {
    title: "Fashion & Beauty",
    url: "//yt3.googleusercontent.com/d4wezWM9Sz96jsJXsGhZqVAnyl9HPgobo3Q2u75zU_pGBZHfgsAMoAv7cdEchj_9OpzpsQ70YQ=s72-c-k-c0x00ffffff-no-rj",
  },
  Podcasts: {
    title: "Podcasts",
    url: "https://www.youtube.com/img/podcasts/avatar/avatar_color_v3_circle_100x100.png",
  },
};

const Category = () => {
  const params = useParams();
  const { category } = useContext(store);
  const [data, setData] = useState([]);
  //   const [more, setMore] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=AIzaSyCk_2z6u-dITKMVL-DufZuDflMSHrTAnZk`;
      const response = await fetch(url);
      const result = await response.json();

      setData([...result.items]);
    };
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
      case categoryImage.Movies.title:
        return categoryImage.Movies.url;
      case categoryImage.Live.title:
        return categoryImage.Live.url;
      case categoryImage.Gaming.title:
        return categoryImage.Gaming.url;
      case categoryImage.News.title:
        return categoryImage.News.url;
      case categoryImage.Sports.title:
        return categoryImage.Sports.url;
      case categoryImage.Courses.title:
        return categoryImage.Courses.url;
      case categoryImage.Fashion.title:
        return categoryImage.Fashion.url;
      case categoryImage.Podcasts.title:
        return categoryImage.Podcasts.url;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen mx-auto text-white w-full overflow-y-auto flex flex-col gap-5 pt-0 p-5">
        <div className="flex gap-5 items-center">
          <img
            src={CategoryImageRender()}
            alt={params.id}
            className="rounded-full h-20 w-20"
          />
          <h1 className="text-4xl font-bold">{params.id}</h1>
        </div>
        {data.map((each, index) => (
          <div key={index} className="flex flex-col min-[640px]:flex-row gap-3">
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

              {/* {more && (
                <div className="absolute right-0 top-[50px] w-[180px] py-2 bg-[#262626] rounded-xl">
                  <div className="flex items-center gap-4 hover:bg-[#494848] p-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      fill="white"
                    >
                      <path d="M21 16h-7v-1h7v1zm0-5H9v1h12v-1zm0-4H3v1h18V7zm-11 8-7-4v8l7-4z"></path>
                    </svg>
                    <span>Add to queue</span>
                  </div>
                  <div className="flex items-center gap-4 hover:bg-[#494848] p-2 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      fill="white"
                    >
                      <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
                    </svg>
                    <span>Share</span>
                  </div>
                </div>
              )} */}

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
    </div>
  );
};

export default Category;
