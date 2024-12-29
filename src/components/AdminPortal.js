import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
      const videoData = await fetchUserVideos(userId);
      setVideos(videoData);
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
    <div>
      <h1>Manage Videos</h1>
      <button
        onClick={() =>
          handleBulkDelete(
            videos
              .filter((video) => video.selected)
              .map((video) => video.videoId)
          )
        }
      >
        Delete Selected Videos
      </button>
      <ul>
        {videos.map((video) => (
          <li key={video.videoId}>
            <input
              type="checkbox"
              checked={video.selected || false}
              onChange={() => handleCheckboxChange(video.videoId)}
            />
            <img src={video.thumbnailSignedUrl} alt={video.title} width={100} />
            <div>
              <h3>{video.title}</h3>
              <p>Uploaded by: {video.uploadedBy}</p>
              <p>Upload Date: {new Date(video.uploadDate).toLocaleString()}</p>
              <p>Length: {video.length}</p>
              <button onClick={() => handleUpdate(video.videoId)}>
                Update
              </button>
              <button onClick={() => handleDelete(video.videoId)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPortal;
