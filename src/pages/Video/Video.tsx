import { useParams } from "react-router-dom";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";

type RouteParams = {
  videoId: string;
};

const Video = () => {
  const { videoId } = useParams<RouteParams>();

  const id = videoId || "defaultVideoId";

  return (
    <div className="playContainer">
      <PlayVideo videoId={id} />
    </div>
  );
};

export default Video;
