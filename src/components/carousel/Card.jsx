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

const FirstHalf = styled.img`
  ${tw`h-1/2 rounded-md`}
  width: auto;
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
      <FirstHalf src={img} />
      <SecondHalf>
        <Heading3 semibold>{heading}</Heading3>
        <Body2>
          <span style={{ 'font-weight': '900', 'font-size': '1.2em' }}>{name}</span> : {designation}
        </Body2>
        <Bottom>
          <Body1>{date}</Body1>
          <Button small text={label} />
        </Bottom>
      </SecondHalf>
    </CardMob>
  );
}
