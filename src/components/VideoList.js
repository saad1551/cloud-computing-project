import React from 'react';
import VideoPlayer from './VideoPlayer';
import { VideoItem, VideoTitle, UserInfo } from './SharedStyles';
import { Link } from 'react-router-dom';

const VideoList = ({ videos }) => {
    return (
        <>
            {videos.map((video) => (
                <VideoItem key={video.id} >
                    <Link to={`/${video.id}`}>
                        <VideoTitle>{video.title}</VideoTitle>
                    </Link>
                    <VideoPlayer videoUrl={video.url} />
                    <UserInfo>{video.user}</UserInfo>
                </VideoItem>
            ))}
        </>
    );
};

export default VideoList;