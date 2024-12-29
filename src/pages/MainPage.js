import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { VideoListContainer } from '../components/SharedStyles';
import VideoList from '../components/VideoList';
import VideoUpload from '../components/VideoUpload';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [videos, setVideos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/storage/media/dashboard-videos`, {
                    withCredentials: true
                });
                if (response.status === 200) {
                    setVideos(response.data);
                } else if (response.status === 401) {
                    toast.error('You must be logged in to view this page.');
                    navigate('/login');
                }
            } catch (error) {
                toast.error('Error fetching videos. Displaying mock data.');
                console.error('Error fetching videos:', error);
                // Mock data as a backup
                const mockVideos = [
                    { videoId: 1, title: 'Video 1', length: "00:00:06", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User A' },
                    { videoId: 2, title: 'Video 2', length: "00:00:10", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User B' },
                    { videoId: 3, title: 'Video 3', length: "00:00:15", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User C' },
                    { videoId: 4, title: 'Video 4', length: "00:00:20", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User D' },
                    { videoId: 5, title: 'Video 5', length: "00:00:25", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User E' },
                    { videoId: 6, title: 'Video 6', length: "00:00:30", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User F' },
                    { videoId: 7, title: 'Video 7', length: "00:00:35", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User G' },
                    { videoId: 8, title: 'Video 8', length: "00:00:40", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User H' },
                    { videoId: 9, title: 'Video 9', length: "00:00:45", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User I' },
                    { videoId: 10, title: 'Video 10', length: "00:00:50", url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg', uploadDate: "2024-12-29T11:48:06.140Z", uploadedBy: 'User J' },
                ];
                setVideos(mockVideos);
            }
        };

        fetchVideos();
    }, [navigate]);

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