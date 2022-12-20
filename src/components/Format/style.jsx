/* eslint-disable max-len */
import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  grid-template-rows: repeat(7, minmax(0, 1fr));
  grid-template-columns: repeat(13, minmax(0, 1fr));
  background-image: url(https://res.cloudinary.com/dmutbjmoo/image/upload/v1671562171/Ellipse_55_l6ixzq.svg);
  background-repeat: no-repeat;
  background-position: 24% 45%;
  background-size: 90% auto;
  ${tw`
  grid  
  py-10
  w-full
  `}
  @media (max-width: 720px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
    gap: 24px;
    background-image: url(https://res.cloudinary.com/dmutbjmoo/image/upload/v1671565643/Vector_gzlljh.svg);
    background-repeat: no-repeat;
    background-size: 500px 600px;
  }
`;

export const Container = styled.div`
  ${tw`
    w-10/12
    mx-auto  
  `}
`;

export const EventContainer = styled.div`
  padding: 32px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  background-color: #202020;

  @media (max-width: 720px) {
    &.first {
      grid-column: 1 / 4 !important;
      grid-row: span 1 !important;
    }

    &.second {
      grid-column: 2 / 5 !important;
      grid-row: span 1 !important;
    }
  }

  .event-description {
    background-color: #fff49633;
    width: 100%;
    border-radius: 44px 14px 14px 44px;
    position: relative;
    text-align: center;
    padding: 8px 0;
  }

  .event-number {
    background-color: #ffe81f;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 2px;
    padding: 12px 8px;
  }

  button {
    margin-left: auto;
    padding: 4px 8px;
    color: #fff;
  }

  @media (max-width: 720px) {
    &{
      gap: 8px;
      padding: 16px 12px;
    }

    p {
      font-size: 12px;
    }

    h4{
      font-size: 14px;
    }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: center;
  
  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  button {
    margin-bottom: 6px;
  }

  @media (max-width: 720px) {
    &{
      grid-column : 1/-1 !important;
      grid-row: span 1 !important;
      margin-bottom: 16px;
      align-items: center;
    }

    p {
      font-size: 12px;
    }

    h4{
      font-size: 18px;
    }

    img{
      height: 50px;
    }
`;
