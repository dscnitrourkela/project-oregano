import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Heading3, Body1, Button, Body2 } from '../shared';

const CardMob = styled.div`
  ${tw`
    rounded-2xl
    p-3
    bg-gray-900
    flex
    flex-col
    gap-4
  `}
  height: 359px;
  width: 259px;
  sm:border: ${(props) => (props.focused ? '2px solid yellow' : '')};
`;

const FirstHalf = styled.div`
  ${tw`h-1/2 rounded-md`}
  overflow: hidden;
  border-radius: ${(props) => props.radius};
`;

const Img = styled.img`
  border-radius: ${(props) => props.radius};
  margin: 0 auto;
  object-fit: cover;
`;

const SecondHalf = styled.div`
  ${tw`h-1/2  text-yellow-400 flex flex-col justify-between`}
`;

const Bottom = styled.div`
  ${tw`flex justify-between items-center`}
`;

export default function Card({ heading, name, designation, date, label, focused, img }) {
  return (
    <CardMob focused={focused}>
      <FirstHalf>
        <Img src={img} />
      </FirstHalf>
      <SecondHalf>
        <Heading3 semibold>{heading}</Heading3>
        <Body2>
          <span className='font-semibold' style={{ display: 'inline-block' }}>
            {name}
          </span>
        </Body2>
        <Body2
          style={{
            display: '-webkit-box',
            '-webkit-line-clamp': '1',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
            'text-overflow': 'ellipsis',
          }}
        >
          {designation}
        </Body2>
        <Bottom>
          <Body1>{date}</Body1>
          <Button small text={label} />
        </Bottom>
      </SecondHalf>
    </CardMob>
  );
}
