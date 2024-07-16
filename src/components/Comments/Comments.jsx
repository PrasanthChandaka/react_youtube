import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { likesCount } from "../Constants/Constants";

const Comments = ({ id }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const getCommentsApi = async () => {
      const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${id}&key=${
        import.meta.env.VITE_REACT_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.items);
      setComments(data.items);
    };
    getCommentsApi();
  }, [id]);

  return (
    comments &&
    comments.map((each) => (
      <div key={each.id} className="w-full flex gap-3 text-white my-3">
        <div className="h-10 w-10 text-center rounded-full overflow-hidden bg-[grey] flex-shrink-0">
          <img
            className="h-full w-full object-fill"
            src={each.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt=""
          />
        </div>
        <div>
          <p className="text-heading">
            {each.snippet.topLevelComment.snippet.authorDisplayName}
            <span className="text-[grey]">
              {" "}
              {moment(
                each.snippet.topLevelComment.snippet.publishedAt
              ).fromNow()}
            </span>
          </p>
          <p className="text-para">
            {each.snippet.topLevelComment.snippet.textDisplay}
          </p>
          <div className="flex gap-4">
            <button type="button" className="flex gap-1 my-2">
              <AiOutlineLike size={25} />
              <span>
                {likesCount(each.snippet.topLevelComment.snippet.likeCount)}
              </span>
            </button>
            <button type="button" className="flex gap-1 my-2">
              <BiDislike size={25} />
            </button>
            <button type="button">Reply</button>
          </div>
        </div>
      </div>
    ))
  );
};

export default Comments;
