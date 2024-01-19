import React from 'react';
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
  height: 100%;
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
  return (
    <div className='flex m-auto'>
      <ProgressBar>
        <Progress />
      </ProgressBar>
      <div className='flex flex-col md:gap-[36px]'>
        {timelinecontent.nodes.map((node) => (
          <div key={node.serialid} className='flex items-center md:flex-row flex-col'>
            <Branch />
            <Box color={node.color}>
              <BoxHeading color={node.color}>{node.title}</BoxHeading>
              <Line />
              <Duration>{node.duration}</Duration>
              <Description>Get extra perks with early registration</Description>
            </Box>
            <MobileBranch />
          </div>
        ))}
      </div>
    </div>
  );
}
