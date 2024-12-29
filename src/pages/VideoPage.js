import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Container, VideoTitle, Video, UserInfo } from '../components/SharedStyles';

const mockVideo = {
    videoId: 1,
    title: 'Mock Video',
    length: "00:00:06",
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailSignedUrl: 'https://i.ytimg.com/vi/WzDmoTydaEk/maxresdefault.jpg',
    uploadDate: "2024-12-29T11:48:06.140Z",
    uploadedBy: 'Mock User'
};

const VideoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/storage/media/video/${id}`, {
                    withCredentials: true
                });
                if (response.status === 200) {
                    setVideo(response.data);
                } else if (response.status === 401) {
                    toast.error('You must be logged in to view this page.');
                    navigate('/login');
                } else {
                    setVideo(mockVideo);
                }
            } catch (error) {
                toast.error('Error fetching video. Displaying a mock video.');
                console.error('Error fetching video:', error);
                setVideo(mockVideo);
            }
        };

        fetchVideo();
    }, [id, navigate]);

    if (!video) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container>
            <Video controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
            </Video>
            <VideoTitle>{video.title}</VideoTitle>
            <UserInfo>Uploaded by: {video.uploadedBy}</UserInfo>
            <UserInfo>Upload date: {new Date(video.uploadDate).toLocaleDateString()}</UserInfo>
        </Container>
    );
};

export default VideoPage;