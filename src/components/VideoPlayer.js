import React from 'react';
import { Video } from './SharedStyles';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <Video controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  );
};

export default VideoPlayer;