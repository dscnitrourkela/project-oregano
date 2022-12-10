import React, { useRef, useState } from 'react';
import aboutVideo from '../../../assets/AboutUs.mp4';
import { VideoBlock, VideoContainer } from './style';

const VidScroll = () => {
  const [currentTime, setCurrentTime] = useState(10);
  const [isLoaded, setLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  window.onscroll = () => {
    if (isLoaded) {
      setCurrentTime(-containerRef.current.getBoundingClientRect().y / 160);
      setTimeout(() => {
        videoRef.current.currentTime = currentTime;
      }, 1000);
    }
  };

  const handler = () => {
    setLoaded(true);
  };

  return (
    <VideoContainer ref={containerRef}>
      <VideoBlock ref={videoRef} src={aboutVideo} onLoadedMetadata={handler} controls preloaded />
    </VideoContainer>
  );
};

export default VidScroll;
