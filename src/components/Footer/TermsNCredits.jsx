import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const TermsNCredits = ({ copyw }) => {
  return (
    <LastLine>
      <Terms>
        <ConditionItems>Privacy & Cookies</ConditionItems>
        <ConditionItems>Terms and Conditions</ConditionItems>
      </Terms>

      <Credits>{copyw.content}</Credits>
    </LastLine>
  );
};

export const LastLine = styled.div`
  ${tw`
  text-gray-500
    h-[50px]
    w-full
    flex
    flex-row
    justify-start	
    items-center
  `}
`;

export const Terms = styled.div`
  ${tw`
  flex
  flex-row
  justify-start	
  `}
`;

export const ConditionItems = styled.span`
  ${tw`
  text-xl
  px-4
  py-6
`}
`;

export const Credits = styled.div`
  ${tw`
  mx-2
  px-8
  `}
`;
export default TermsNCredits;
