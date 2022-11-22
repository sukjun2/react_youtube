import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import { Videos } from './index';

const ChannelConts = () => {
  const [channelDetail, setchannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);

      setchannelDetail(data?.items[0]);

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  return (
    <section id="channelConts">
      <div
        className="channel-header"
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <div className="channel-info">
        <img
          src={channelDetail?.snippet?.thumbnails?.medium?.url}
          alt={channelDetail?.snippet?.title}
        />
        <h3>{channelDetail?.snippet?.title}</h3>
        <div>
          <span>
            구독자 수 : {Number(channelDetail?.statistics?.subscriberCount).toLocaleString()} 명
          </span>{' '}
          <br />
          <span>
            게시물 수 : {Number(channelDetail?.statistics?.videoCount).toLocaleString()} 개
          </span>{' '}
          <br />
          <span>총 조회수 : {Number(channelDetail?.statistics?.viewCount).toLocaleString()} 회</span>
        </div>
      </div>
      <div className="channel-videos">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default ChannelConts;
