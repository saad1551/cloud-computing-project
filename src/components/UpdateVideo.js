import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateVideo = () => {
  const { videoId } = useParams();
  console.log(videoId);
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_STORAGE_URL}/storage/media/video/${videoId}`,
          {
            withCredentials: true,
          }
        );
        setVideo(response.data);
        setTitle(response.data.title);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("thumbnail", thumbnail);
    formData.append("title", title);

    try {
      await axios.patch(`/storage/media/video/${videoId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      navigate("/admin/videos");
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  return (
    <div>
      <h1>Update Video</h1>
      {video && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Video File:</label>
            <input type="file" onChange={handleVideoChange} accept="video/*" />
          </div>
          <div>
            <label>Thumbnail:</label>
            <input
              type="file"
              onChange={handleThumbnailChange}
              accept="image/*"
            />
          </div>
          <button type="submit">Update Video</button>
        </form>
      )}
    </div>
  );
};

export default UpdateVideo;
