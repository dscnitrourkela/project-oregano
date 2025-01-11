/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';

import { ELLIPSE_IMG, LINE_IMG, TIMELINE } from '@/config/content/timeline';

import { H1 } from '../shared/typography/Headings';
import {
  Box,
  BoxHeading,
  Branch,
  Container,
  Description,
  Duration,
  MobileBranch,
  Progress,
  ProgressBar,
  TimelineHeadingContainer,
} from './styles';

const Line = () => <img src={LINE_IMG} alt='Line' />;
const Ellipse = () => (
  <div>
    <img src={ELLIPSE_IMG} alt='Ellipse' className='absolute bottom-0 scale-150 filter invert' />
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
    <Container>
      <div className='flex w-full justify-center mb-20'>
        <TimelineHeadingContainer>
          <H1>Timeline</H1>
        </TimelineHeadingContainer>
      </div>
      <div className='flex m-auto px-0 md:px-10' ref={targetRef}>
        <ProgressBar>
          <Progress height={scrollHeight}>
            <Ellipse />
          </Progress>
        </ProgressBar>
        <div className='flex flex-col md:gap-[36px]'>
          {TIMELINE.nodes.map((node, index) => (
            <div key={node.serialid} className='flex items-center md:flex-row flex-col'>
              <Branch />
              <Box color={node.color}>
                <BoxHeading color={node.color}>{node.title}</BoxHeading>
                <Line />
                <Duration>{node.duration}</Duration>
                <Description>{node.description}</Description>
              </Box>
              {index !== TIMELINE.nodes.length - 1 && <MobileBranch />}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
