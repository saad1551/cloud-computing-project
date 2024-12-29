import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Container, VideoTitle, Video } from '../components/SharedStyles';

const mockVideo = {
    id: 1,
    title: 'Mock Video',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    user: 'Mock User'
};

const VideoPage = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/storage/media/video/${id}`);
                if (response.data) {
                    setVideo(response.data);
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
    }, [id]);

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
        </Container>
    );
};

export default VideoPage;