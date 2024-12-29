import styled from 'styled-components';

// Color Palette
export const primaryColor = '#29ABE2'; 
export const backgroundColor = '#f8f9fa';
export const textColor = '#343a40'; 
export const borderColor = '#ced4da';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%; 
  max-width: 700px; 
  margin: 40px auto;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e88e5; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); 
  }

  &:active {
    background-color: #1976d2; 
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); 
  }
`;

export const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid ${borderColor};
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${primaryColor};
    outline: none;
    box-shadow: 0 0 5px rgba(41, 171, 226, 0.2);
  }
`;

export const StyledFileInput = styled.input`
    &::-webkit-file-upload-button {
        padding: 12px 24px;
        background-color: ${primaryColor};
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;
        transition: background-color 0.3s ease;
        margin: 10px; /* Added margin */

        &:hover {
            background-color: #1e88e5;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        &:active {
            background-color: #1976d2;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        }
    }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  color: ${primaryColor};
  font-weight: 600;
`;

export const VideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
  gap: 10px;
  padding: 20px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
`;


export const VideoItem = styled.div`
  width: calc(20% - 10px); /* 5 videos per row */
  max-width: 1000px;
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  margin-bottom: 20px; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: calc(25% - 10px); /* 4 videos per row */
  }

  @media (max-width: 900px) {
    width: calc(33.33% - 10px); /* 3 videos per row */
  }

  @media (max-width: 700px) {
    width: calc(50% - 10px); /* 2 videos per row */
  }

  @media (max-width: 500px) {
    width: 100%; /* 1 video per row */
  }
`;

export const VideoTitle = styled.h3`
  padding: 10px;
  margin: 0;
  text-align: center;
  color: ${textColor};
  font-size: 1em; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserInfo = styled.p`
    text-align: center;
    font-size: 0.9em;
    color: gray;
    margin: 5px 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const UploadContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

export const HeaderContainer = styled.header`
  background-color: ${primaryColor};
  color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2em;
  font-weight: 700;
`;

export const FooterContainer = styled.footer`
  background-color: ${textColor};
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  width: 100%;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactInfo = styled.p`
  margin: 5px 0;
  color: white;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 1px solid ${borderColor};
`;

export const VideoLength = styled.span`
  display: block;
  text-align: center;
  font-size: 0.9em;
  color: gray;
  margin-top: 5px;
`;