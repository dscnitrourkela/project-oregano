import React, { useRef, useState } from 'react';
import { VideoBlock, VideoContainer } from './style';

const VidScroll = () => {
  const [currentTime, setCurrentTime] = useState(10);
  const [isLoaded, setLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const isBrowser = () => typeof window !== 'undefined';

  if (isBrowser()) {
    window.onscroll = () => {
      if (isLoaded) {
        setCurrentTime(-containerRef.current.getBoundingClientRect().y / 160);
        setTimeout(() => {
          videoRef.current.currentTime = currentTime;
        }, 1000);
      }
    };
  }

  const handler = () => {
    setLoaded(true);
  };

  return (
    <VideoContainer ref={containerRef}>
      <VideoBlock
        ref={videoRef}
        src='https://res.cloudinary.com/dmutbjmoo/video/upload/v1670678849/AboutUs_lelxbm.mp4'
        onLoadedMetadata={handler}
        preloaded
      />
    </VideoContainer>
  );
};

export default VidScroll;
