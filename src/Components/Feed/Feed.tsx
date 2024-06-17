import { NavLink } from "react-router-dom";
import "./Feed.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiKey } from "../../YoutubeApi";
import Loading from "./Loading";

type VideoSnippet = {
  thumbnails: {
    medium: {
      url: string;
    };
  };
  title: string;
  channelTitle: string;
  categoryId: string;
};

type VideoStatistics = {
  viewCount: string;
};

type VideoItem = {
  id: string;
  snippet: VideoSnippet;
  statistics: VideoStatistics;
};

const Feed = ({ category }: { category: string }) => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${category}&key=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        setVideos(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error, "ERROR");
      });
  }, [category]);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="card">
      {videos.map((video, index) => (
        <div key={index}>
          <NavLink to={`video/${video.snippet.categoryId}/${video.id}`}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt="Thumbnail"
              className="image"
            />
            <h3 className="title">{video.snippet.title}</h3>
            <h4 className="channelName">{video.snippet.channelTitle}</h4>
            <p className="views">{`${video.statistics.viewCount} Views`}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Feed;
