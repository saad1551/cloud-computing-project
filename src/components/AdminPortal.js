import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Title, Button, Thumbnail, VideoTitle, UserInfo, UploadDate, VideoLength, Input, VideoListContainer, AdminVideoListItem, VideoDetails, ButtonGroup } from './SharedStyles';

const AdminPortal = ({ userId }) => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const fetchUserVideos = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_STORAGE_URL}/storage/media/user`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching videos:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetchUserVideos(userId);
      if (data.length === 0) {
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
      } else {
        setVideos(data);
      }
    };

    fetchVideos();
  }, [userId]);

  const handleUpdate = (videoId) => {
    navigate(`/update-video/${videoId}`);
  };

  const handleDelete = async (videoId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_STORAGE_URL}/storage/media/video/${videoId}`,
        {
          withCredentials: true,
        }
      );
      setVideos(videos.filter((video) => video.videoId !== videoId));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const handleBulkDelete = async (selectedVideos) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_STORAGE_URL}/storage/media/videos/bulk`,
        {
          data: { videoIds: selectedVideos },
          withCredentials: true,
        }
      );
      setVideos(
        videos.filter((video) => !selectedVideos.includes(video.videoId))
      );
    } catch (error) {
      console.error("Error bulk deleting videos:", error);
    }
  };

  const handleCheckboxChange = (videoId) => {
    setVideos(
      videos.map((video) =>
        video.videoId === videoId
          ? { ...video, selected: !video.selected }
          : video
      )
    );
  };

  return (
    <Container>
      <Title>Admin Portal</Title>
      <Button
        onClick={() =>
          handleBulkDelete(
            videos
              .filter((video) => video.selected)
              .map((video) => video.videoId)
          )
        }
      >
        Delete Selected Videos
      </Button>
      <VideoListContainer>
        {videos.map((video) => (
          <AdminVideoListItem key={video.videoId}>
            <Input
              type="checkbox"
              checked={video.selected || false}
              onChange={() => handleCheckboxChange(video.videoId)}
            />
            <Thumbnail src={video.thumbnailSignedUrl} alt={video.title} />
            <VideoDetails>
              <VideoTitle>{video.title}</VideoTitle>
              <UserInfo>Uploaded by: {video.uploadedBy}</UserInfo>
              <UploadDate>Upload Date: {new Date(video.uploadDate).toLocaleString()}</UploadDate>
              <VideoLength>Length: {video.length}</VideoLength>
              <ButtonGroup>
                <Button onClick={() => handleUpdate(video.videoId)}>Update</Button>
                <Button onClick={() => handleDelete(video.videoId)}>Delete</Button>
              </ButtonGroup>
            </VideoDetails>
          </AdminVideoListItem>
        ))}
      </VideoListContainer>
    </Container>
  );
};

export default AdminPortal;