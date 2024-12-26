import React from 'react';
import VideoPlayer from './VideoPlayer';
import { VideoItem, VideoTitle, UserInfo } from './SharedStyles';

const VideoList = ({ videos }) => {
  return (
    <>
      {videos.map((video) => (
        <VideoItem key={video.id}>
          <VideoTitle>{video.title}</VideoTitle>
          <VideoPlayer videoUrl={video.url} />
          <UserInfo>{video.user}</UserInfo>
        </VideoItem>
      ))}
    </>
  );
};

export default VideoList;