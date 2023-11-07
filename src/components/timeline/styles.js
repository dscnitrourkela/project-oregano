import styled from 'styled-components';
import { Body1, Heading1, Heading4 } from '../shared';

export const TimelineHead = styled(Heading1)`
  font-weight: 700;
  margin: 0 0 24px 0;
  @media (max-width: 640px) {
    font-size: 32px;
    line-height: 96px;
    margin: 32px 0px;
  }
`;
export const TimelineWrapper = styled.div`
  width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  @media (max-width: 640px) {
    width: 390px;
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 201px 134px 243px 316px;
  grid-template-rows: 248px 135px;
  margin: auto;
  color: #fff;
`;
export const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr;
  grid-template-rows: 91px;
  width: 363px;
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
    padding: 13px 18px;
    gap: 8px;
    div {
      h3 {
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }
    p {
      font-size: 10px;
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
      width: 86px;
      height: 1px;
      transform: rotate(-45deg) translate(-15px, 60px);
    }
  }
`;
export const RightLineWrapper = styled(LineWrapper)`
  @media (max-width: 640px) {
    svg {
      transform: rotate(44deg) translate(5px, 39px);
    }
  }
`;
export const VerticalBox = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 4px;
    height: 197px;
    background: #fed954;
    transform: translateY(-58px);
  }
`;
export const Date = styled(Heading4)`
  font-size: 36px;
  font-weight: 600;
  line-height: 42px;
  margin: 0;
  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const Month = styled(Body1)`
  @media (max-width: 640px) {
    font-size: 11px;
    line-height: 18px;
  }
`;
export const WheelWrapper = styled.div`
  position: relative;
  height: 134px;
  place-self: center;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 640px) {
    width: 91px;
    height: 91px;
    svg {
      width: 91px;
      height: 91px;
    }
    div {
      display: flex;
      width: 43px;
      height: 40px;
      flex-direction: column;
      align-items: center;
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
    width: 106px;
    height: 20px;
  }
`;
export const EllipseContent = styled(Heading4)`
  line-height: 32px;
  width: 202px;
  margin: 0 0 0 25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 640px) {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    width: 113px;
    height: 56px;
    margin: 0 0 0 11px;
  }
`;
export const EllipseWrapper = styled.div`
  place-self: center;
  position: relative;
  @media (max-width: 640px) {
    svg {
      width: 138px;
      height: 123px;
    }
  }
`;
export const CircledLineWrapper = styled.div`
  position: relative;
  place-self: center;
  #line {
    width: 4px;
    height: 158px;
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
export const DesktopView = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;
export const MobileView = styled.div`
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
    grid-template-columns: 313px 236px 134px 201px 352px;
  }
`;
export const VerticalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 4px;
    height: 165px;
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
