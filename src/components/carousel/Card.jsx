import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useState } from 'react';
import { Heading3, Heading4, Heading5, Body1 } from '../shared';

const CardMob = styled.div`
  ${tw`
    rounded-lg p-3 mx-3 bg-gray-900
  `}
  height: 359px;
  width: 259px;
`;
const CardMobFocused = styled.div`
  ${tw`
    rounded-lg p-3 mx-3 bg-gray-900
  `}
  height: 359px;
  width: 259px;
  border: 2px solid yellow;
`;
const FirstHalf = styled.div`
  ${tw`h-1/2 bg-white w-full rounded-md`}
`;
const SecondHalf = styled.div`
  ${tw`h-1/2  text-yellow-400 py-2 flex flex-col justify-between`}
`;
const ButtonYellow = styled.button`
  ${tw`bg-yellow-400 px-4 py-3 rounded-full text-black`}
`;
const Bottom = styled.div`
  ${tw`flex justify-between`}
`;

const CenteredY = styled.div`
  ${tw`my-auto`}
`;

export default function Card({ id, heading, name, designation, date, label, focused }) {
  if (focused) {
    return (
      <CardMobFocused>
        <FirstHalf />
        <SecondHalf>
          <Heading3>{heading}</Heading3>
          <Body1>
            {name} : {designation}
          </Body1>
          <Bottom>
            <CenteredY>
              <Heading4>{date}</Heading4>
            </CenteredY>
            <ButtonYellow>{label}</ButtonYellow>
          </Bottom>
        </SecondHalf>
      </CardMobFocused>
    );
  } else {
    return (
      <CardMob>
        <FirstHalf />
        <SecondHalf>
          <Heading3>{heading}</Heading3>
          <Body1>
            {name} : {designation}
          </Body1>
          <Bottom>
            <CenteredY>
              <Heading4>{date}</Heading4>
            </CenteredY>
            <ButtonYellow>{label}</ButtonYellow>
          </Bottom>
        </SecondHalf>
      </CardMob>
    );
  }
}
