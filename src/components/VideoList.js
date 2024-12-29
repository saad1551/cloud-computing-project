import React from 'react';
import { Link } from 'react-router-dom';
import { VideoItem, VideoTitle, UserInfo, Thumbnail } from './SharedStyles';

const VideoList = ({ videos }) => {
    return (
        <>
            {videos.map((video) => (
                <VideoItem key={video.id}>
                    <Link to={`/${video.id}`}>
                        <Thumbnail src={video.thumbnail} alt={video.title} />
                        <VideoTitle>{video.title}</VideoTitle>
                    </Link>
                    <UserInfo>{video.user}</UserInfo>
                </VideoItem>
            ))}
        </>
    );
};

export default VideoList;