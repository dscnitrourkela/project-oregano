import React from 'react';
import styled from 'styled-components';
// import { Body2, Heading3 } from '../../shared/Typography';

export const MentorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 550px;
  aspect-ratio: 4/3;
  border-radius: 0px;
  object-fit: cover;
  object-position: center bottom;
  img {
    ${'' /* width: 410px; */}
    aspect-ratio: 1/1;
    ${'' /* border-radius: 40px; */}
    @media (max-width: 768px) {
      height: 218px;
    }
    @media (max-width: 576px) {
      width: 264px;
    }
  }
  @media (max-width: 768px) {
    width: 480px;
  }
  @media (max-width: 576px) {
    width: 230px;
  }
`;

export default function MentorBox({ imgUrl, imgTitle }) {
    return (
      <MentorCard>
        <img src={imgUrl} alt={imgTitle} />
      </MentorCard>
    );
  }