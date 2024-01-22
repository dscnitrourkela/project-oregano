import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Heading3, Heading4, Body2 } from '../shared';
import { timelinecontent } from '../../../config/content/Timelinecontent';

const ProgressBar = styled.div`
  display: none;
  width: 39px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #191919;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Progress = styled(ProgressBar)`
  position: relative;
  background: #14f195;
  height: ${(props) => `${props.height}%`};
`;

const Branch = styled.div`
  display: none;
  width: 135px;
  height: 4px;
  flex-shrink: 0;
  background: var(--Primary-Yellow-2, #fed954);
  @media (min-width: 768px) {
    display: block;
  }
`;
const MobileBranch = styled.div`
  display: block;
  height: 57px;
  width: 4px;
  flex-shrink: 0;
  background: var(--Primary-Yellow-2, #fed954);
  @media (min-width: 768px) {
    display: none;
  }
`;
const Line = () => (
  <img
    src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1705664338/Line_3_xzegkw.svg'
    alt='Line'
  />
);

const Box = styled.div`
  display: flex;
  padding: 26px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 20px;
  border: 0.4px solid ${(props) => props.color};
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
const BoxHeading = styled(Heading3)`
  color: ${(props) => props.color};
`;
const Duration = styled(Heading4)`
  color: var(--Neutral-2, #ededed);
`;
const Description = styled(Body2)`
  color: var(--Neutral-4, #c3c3c3);
`;
export default function Timeline2() {
  const [scrollHeight, setScrollHeight] = useState(0); // Initial height in percentage
  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      const { top, bottom } = targetRef.current.getBoundingClientRect();
      if (bottom > 0 && top < window.innerHeight) {
        const scrolled = Math.min(
          100,
          Math.max(0, 100 - ((top < 0 ? 0 : top) / (bottom - top)) * 100 - 30),
        );
        console.log('scrolled from top of div:', scrolled);
        setScrollHeight(scrolled);
      }
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Div is intersecting!');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });

    if (targetRef.current) {
      observer.observe(targetRef.current);
      console.log('Observing targetRef:', targetRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      console.log('Observer disconnected');
    };
  }, []);

  return (
    <div className='flex m-auto' ref={targetRef}>
      <ProgressBar>
        <Progress height={scrollHeight}>
          <div className=''>
            <img
              // eslint-disable-next-line max-len
              src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1705901250/Ellipse_20_nhbab9.svg'
              alt='Ellipse'
              className='absolute bottom-0 scale-150'
            />
            <img
              // eslint-disable-next-line max-len
              src='https://res.cloudinary.com/dgjzygzgx/image/upload/v1705901566/HackNITR_logo-removebg-preview_1_m9h3ul.png'
              alt='HN logo'
              className=''
            />
          </div>
        </Progress>
      </ProgressBar>
      <div className='flex flex-col md:gap-[36px]'>
        {timelinecontent.nodes.map((node) => (
          <div key={node.serialid} className='flex items-center md:flex-row flex-col'>
            <Branch />
            <Box color={node.color}>
              <BoxHeading color={node.color}>{node.title}</BoxHeading>
              <Line />
              <Duration>{node.duration}</Duration>
              <Description>Scroll Height: {scrollHeight.toFixed(2)}%</Description>
            </Box>
            <MobileBranch />
          </div>
        ))}
      </div>
    </div>
  );
}
