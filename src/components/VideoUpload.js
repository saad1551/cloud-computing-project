import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, StyledFileInput, Input, Container } from "./SharedStyles";

const VideoUpload = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVideoChange = (event) => {
    setSelectedVideo(event.target.files[0]);
  };

  const handleThumbnailChange = (event) => {
    setSelectedThumbnail(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedVideo || !selectedThumbnail || !videoTitle) {
      toast.error("Please select a video, a thumbnail, and enter a title.");
      return;
    }

    const formData = new FormData();
    formData.append("video", selectedVideo);
    formData.append("thumbnail", selectedThumbnail);
    formData.append("videoTitle", videoTitle.toString());

    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_STORAGE_URL}/storage/media/video`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        toast.success("Video uploaded successfully!");
      } else {
        toast.error("Error uploading video.");
      }
    } catch (error) {
      toast.error("Error uploading video.");
      console.error("Error uploading video:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Video Title"
        value={videoTitle}
        onChange={(e) => setVideoTitle(e.target.value)}
        required
      />
      <label htmlFor="video-upload">Video</label>
      <StyledFileInput
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        required
      />
      <label htmlFor="thumbnail-upload">Thumbnail</label>
      <StyledFileInput
        type="file"
        accept="image/*"
        onChange={handleThumbnailChange}
        required
      />
      <Button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Video"}
      </Button>
    </Container>
  );
};

export default VideoUpload;
