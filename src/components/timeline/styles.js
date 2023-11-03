import styled from 'styled-components';
import { Heading1 } from '../shared';

export const TimelineHead = styled(Heading1)`
  font-weight: 700;
  margin: 0;
  margin-bottom: 24px;
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 96px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
export const TimelineWrapper = styled.div`
  width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 640px) {
    width: 362.885px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 201px 134px 243px 1fr;
  grid-template-rows: 248px 135px;
  margin: auto;
  color: #fff;
`;
export const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  grid-template-rows: 90.9px;
  width: 362.885px;
  margin: auto;
  color: #fff;
`;
export const BoxWrapper = styled.div`
  display: inline-flex;
  padding: 26px 24px;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  border: 0.4px solid ${(props) => props.color};
  place-self: center;
  white-space: nowrap;
  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    h3 {
      color: ${(props) => props.color};
    }
  }
  p {
    color: var(--neutral-5, #a1a1a1);
  }
  @media (max-width: 640px) {
    display: inline-flex;
    padding: 13px 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background: #0e0812;
    place-self: center;

    div {
      h3 {
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
      }
    }
    p {
      font-size: 10px;
      font-style: normal;
      font-weight: 300;
      line-height: 18px;
    }
  }
`;
export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    svg {
      width: 86.267px;
      height: 1px;
      transform: rotate(-45deg) translate(-15px, 60px);
    }
  }
`;
export const RightLineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    svg {
      width: 86.267px;
      height: 1px;
      transform: rotate(44deg) translate(5px, 39px);
      flex-shrink: 0;
    }
  }
`;
export const VerticalBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 4px;
    height: 197px;
    background: #fed954;
    transform: translateY(-27px);
  }
`;
export const WheelWrapper = styled.div`
  position: relative;
  height: 134px;
  place-self: center;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  #date {
    font-family: Prompt;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
    margin: 0;
  }
  @media (max-width: 640px) {
    width: 90.9px;
    height: 90.9px;
    svg {
      width: 90.9px;
      height: 90.9px;
    }
    .content {
      display: flex;
      width: 43.2px;
      height: 39.6px;
      flex-direction: column;
      align-items: center;
      #date {
        font-size: 18px;
        font-weight: 600;
        line-height: 21.6px;
      }
      #month {
        font-size: 10.8px;
        font-style: normal;
        font-weight: 300;
        line-height: 18px;
      }
    }
  }
`;
export const ArrowWrapper = styled.div`
  position: relative;
  place-self: center;
  #mobile {
    display: none;
  }
  @media (max-width: 640px) {
    #desktop {
      display: none;
    }
    #mobile {
      display: block;
    }
    width: 106.262px;
    height: 20.251px;
  }
`;
export const EllipseWrapper = styled.div`
  place-self: center;
  position: relative;
  #ellipse {
    line-height: 32px;
    width: 202px;
    margin: 0;
    margin-left: 25px;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    svg {
      width: 137.885px;
      height: 123px;
    }
    #ellipse {
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 20px;
      width: 112.75px;
      height: 55.909px;
      margin-left: 11.43px;
    }
  }
`;
export const CircledLineWrapper = styled.div`
  position: relative;
  place-self: center;
  #line {
    width: 4px;
    height: 158px;
    flex-shrink: 0;
  }
  #circle1 {
    position: absolute;
    top: 39px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  #circle2 {
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 640px) {
    display: none;
  }
`;
export const Desktop = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Mobile = styled.div`
  @media (min-width: 640px) {
    display: none;
  }
`;
export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: 352px 201px 134px 201px 1fr;
  grid-template-rows: 141px 103px;
  margin: auto;
  color: #fff;
  @media (max-width: 768px) {
    grid-template-columns: 313px 201px 134px 201px 352px;
  }
`;
export const VerticalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 4px;
    height: 165.242px;
    background: #fed954;
    transform: translateY(27px);
  }
  @media (max-width: 640px) {
    div {
      height: 114px;
      transform: translateY(0px);
    }
  }
`;
