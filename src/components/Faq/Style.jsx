import styled, { keyframes } from 'styled-components';
import { Caption } from '../shared';

const rotateOut = keyframes`
  from {
    
    transform: rotate(0deg);
  }
  to {
    
    transform: rotate(45deg);
  }
`;

export const FAQContainer = styled.div`
  width: 1162px;
  margin: auto;

  top: 6109px;
  left: 139px;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const FAQHeading = styled.div`
  width: 612px;
  height: 64px;
  font-size: 48px;
  font-weight: 600;
  line-height: 64px;
  color: #fff;
  margin-bottom: -35px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const FAQCaption = styled.div``;

export const FAQQuestionContainer = styled.div`
  width: 100%;
  height: 80px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const FAQQuestion = styled.div`
  flex-direction: column;
  display: flex;
  padding: 16px 36px;
  align-items: flex-start;
  gap: 404px;
  border-radius: 16px;
  border: 2px solid var(--neutral-3, #d9d9d9);
  gap: 36px;
  color: #fff;
  font-family: Prompt;
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  width: 1162px;
  cursor: pointer;

  transition: 0.3s;

  &.opened {
    border: 2px solid var(--color-primary-blue);
    background: rgba(0, 0, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const FAQIcon = styled.div`
  //   width: 24px;
  //   height: 24px;
  position: absolute;
  //   left: 12px;
  font-size: 24px;
  right: 225px;
  position: absolute;
  tarnsform: translateY(-50%);
  transition: 0.3s;
  padding-top: 6px;
  &.closing {
    animation: ${rotateOut} 0.3s ease-in-out;
  }
    &.opened {
        transform: rotate(0deg);
    }
`;

export const FAQAnswer = styled(Caption)`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: -25px;
   word-wrap: break-word;
   overflow-wrap: break-word;
  height:auto
  position: relative;
  padding: 0px 20px;
  transition: 0.3s;
`;

export const FAQQuestionText = styled.div`
  height: auto;
  padding: 0px 20px;
  position: relative;
`;
