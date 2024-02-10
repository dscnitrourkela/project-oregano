import React, { useState, useEffect, useRef } from 'react';
import { timelinecontent } from '../../../config/content/Timelinecontent';
import { SectionContainer } from '../shared';
import {
  ProgressBar,
  Progress,
  Branch,
  MobileBranch,
  Box,
  BoxHeading,
  Duration,
  Description,
  TimelineHead,
} from './styles';

const Line = () => (
  <img
    src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1705664338/Line_3_xzegkw.svg'
    alt='Line'
  />
);
const Ellipse = () => (
  <div>
    <img
      src='https://res.cloudinary.com/dhnkuonev/image/upload/v1699458313/hnlogo_ei64kd.png'
      alt='Ellipse'
      className='absolute bottom-0 scale-150 filter invert'
    />
  </div>
);

export default function Timeline() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      const { top, bottom } = targetRef.current.getBoundingClientRect();
      if (bottom > 0 && top < window.innerHeight) {
        let scrolled;

        if (top >= 0) {
          scrolled = Math.min(100, Math.max(0, (1 - top / (bottom - top)) * 100 - 30));
        } else {
          scrolled = Math.min(
            100,
            Math.max(0, (1 - (bottom - window.innerHeight) / (bottom - top)) * 100 - 18),
          );
        }

        setScrollHeight(scrolled);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(() => {}, { threshold: 0 });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionContainer>
      <TimelineHead>{timelinecontent.title}</TimelineHead>
      <div className='flex m-auto px-10' ref={targetRef}>
        <ProgressBar>
          <Progress height={scrollHeight}>
            <Ellipse />
          </Progress>
        </ProgressBar>
        <div className='flex flex-col md:gap-[36px]'>
          {timelinecontent.nodes.map((node, index) => (
            <div key={node.serialid} className='flex items-center md:flex-row flex-col'>
              <Branch />
              <Box color={node.color}>
                <BoxHeading color={node.color}>{node.title}</BoxHeading>
                <Line />
                <Duration>{node.duration}</Duration>
                <Description>{node.description}</Description>
              </Box>
              {index !== timelinecontent.nodes.length - 1 && <MobileBranch />}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
