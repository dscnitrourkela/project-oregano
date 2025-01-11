import styled from 'styled-components';
import tw from 'twin.macro';

import { PrizesHeading, PrizesHeadingContainer } from '../prizes/styles';
import { H1, H3, Paragraph } from '../shared/typography/Headings';

export const ProgressBar = styled.div`
  display: none;
  width: 35px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #191919;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Progress = styled(ProgressBar)`
  position: relative;
  background: linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%);
  height: ${(props) => `${props.height}%`};
`;

export const Branch = styled.div`
  display: none;
  width: 135px;
  height: 4px;
  flex-shrink: 0;
  background: linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%);
  @media (min-width: 768px) {
    display: block;
  }
`;
export const MobileBranch = styled.div`
  display: block;
  height: 57px;
  width: 4px;
  flex-shrink: 0;
  background: linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%);
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Box = styled.div`
  display: flex;
  padding: 1.625rem 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-radius: 20px;
  background: #f6dfc2;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const BoxHeading = styled(H1)`
  ${tw`text-2xl md:text-3xl font-prompt`}
`;
export const Duration = styled(H3)`
  color: var(--Neutral-2, #454545);
  ${tw`text-lg font-prompt`}
`;
export const Description = styled(Paragraph)`
  color: var(--Neutral-4, #454545);
  ${tw`text-lg font-prompt`}
`;
export const Container = styled.section`
  ${tw`
    w-full
    h-auto
    flex
    flex-col
    items-start
    justify-center
    min-h-screen
  `}
  height: fit-content;
  margin: 2% auto 3%;
`;

export const TimelineHeadingContainer = styled(PrizesHeadingContainer)`
  ${tw`my-5 md:my-20`}
`;
export const TimeLineHeading = styled(PrizesHeading)``;
