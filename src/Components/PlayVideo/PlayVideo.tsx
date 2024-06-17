import { useEffect, useState } from "react";
import "./PlayVideo.css";
import axios from "axios";
import { apiKey } from "../../YoutubeApi";

type VideoData = {
  snippet: {
    title: string;
    channelTitle: string;
    description: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
    commentCount: string;
  };
};

type PlayVideoProps = {
  videoId: string;
};

const PlayVideo: React.FC<PlayVideoProps> = ({ videoId }) => {
  const [apiData, setApiData] = useState<VideoData | null>(null);

  useEffect(() => {
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setApiData(response.data.items[0]);
      })
      .catch((error) => {
        console.warn(error, "ERROR");
      });
  }, [videoId]);

  if (!apiData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="playVideo">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3>{apiData.snippet.title}</h3>
      <div className="videoInfo">
        <div>
          <p>{apiData.statistics.viewCount} views</p>
          <span>{apiData.statistics.likeCount} likes</span>
          <p>{apiData.snippet.channelTitle}</p>
        </div>
        <div className="publisher">
          <button className="subscribeBtn">subscribe</button>
        </div>
      </div>
      <div className="videoDescription">
        <p>{apiData.snippet.description}</p>
      </div>
    </div>
  );
};

export default PlayVideo;
