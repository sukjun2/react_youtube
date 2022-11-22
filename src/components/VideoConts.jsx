import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import { Videos, Loader } from '.';
import { FcLike } from 'react-icons/fc';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner column">
          <div className="videoPlay">
            <div className="videoPlayer">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="videoInfo">
              <span className="title">{title}</span>
              <div className="channel">
                <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
              </div>
              <div className="count">
                <div className="view">조회수 : {Number(viewCount).toLocaleString()} 회</div>
                <div className="like">
                  <FcLike />
                  좋아요 : {Number(likeCount).toLocaleString()} 개
                </div>
              </div>
            </div>
          </div>
          <div className="videoList">
            <Videos videos={videos} layout="column" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
