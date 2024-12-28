import React, { useState } from 'react';
import { Button, StyledFileInput, UploadContainer } from './SharedStyles';

const VideoUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }

        //API call to upload the video
        console.log('Uploading:', selectedFile);
    };

    return (
        <UploadContainer>
            <StyledFileInput type="file" onChange={handleFileChange} accept="video/*" />
            <Button onClick={handleUpload}>Upload</Button>
        </UploadContainer>
    );
};

export default VideoUpload;