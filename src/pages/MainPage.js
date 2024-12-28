import React, { useState, useEffect } from 'react';
import VideoList from '../components/VideoList';
import VideoUpload from '../components/VideoUpload';
import { VideoListContainer } from '../components/SharedStyles';


const MainPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // mock data, will need api call to get videos.
        const mockVideos = [
            { id: 1, title: 'Video 1', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', user: 'User A' },
            { id: 2, title: 'Video 2', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', user: 'User B' },
            { id: 3, title: 'Video 3', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', user: 'User C' },
            { id: 4, title: 'Video 4', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', user: 'User D' },
            { id: 5, title: 'Video 5', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', user: 'User E' },
            { id: 6, title: 'Video 6', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', user: 'User F' },
            { id: 7, title: 'Video 7', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', user: 'User G' },
            { id: 8, title: 'Video 8', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', user: 'User H' },
            { id: 9, title: 'Video 9', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', user: 'User I' },
            { id: 10, title: 'Video 10', url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', user: 'User J' },
        ];
        setVideos(mockVideos);
    }, []);

    return (
        <>
            <VideoListContainer>
                <VideoList videos={videos} />
            </VideoListContainer>
                <VideoUpload />
        </>
    );
};

export default MainPage;