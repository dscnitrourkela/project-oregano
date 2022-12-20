import styled from 'styled-components';
import tw from 'twin.macro';

export const Wrapper = styled.div`
  ${tw`
    grid  
    md:grid-cols-12
    py-10
    w-full
  `}
  grid-template-rows : repeat(8, minmax(0, 1fr))
`;

export const Container = styled.div`
  ${tw`
    w-10/12
    mx-auto  
  `}
`;

export const EventContainer = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background-color: #202020;

  .event-description {
    background-color: #fff49633;
    width: 100%;
    border-radius: 200px;
    position: relative;
    text-align: center;
    padding: 6px 0;
  }

  .event-number {
    background-color: #ffe81f;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 2px;
    padding: 8px 4px;
  }

  button {
    margin-left: auto;
    padding: 4px 8px;
    color: #fff;
  }
`;
