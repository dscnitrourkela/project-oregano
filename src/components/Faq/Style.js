import styled, { keyframes } from 'styled-components';
import { Caption, Heading4 } from '../shared';

const rotateOut = keyframes`
  from { transform: rotate(0deg);
  }to {transform: rotate(45deg);
  }
`;

export const FAQContainer = styled.div`
  width: 1162px;
  margin: auto;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const FAQCaption = styled(Heading4)`
  margin-top: -30px;
  text-align: center;
`;

export const FAQQuestionContainer = styled.div`
  width: 100%;
  height: 80px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 16px;
    padding: 6px 24px;
  }
`;

export const FAQQuestion = styled.div`
  display: flex;
  flex-direction: column;
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

  transition: 0.5s;

  &.opened {
    border: 2px solid var(--color-primary-blue);
    background: rgba(0, 0, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    border: 12px;
  }
`;

export const FAQIcon = styled.div`
  font-size: 24px;
  tarnsform: translateY(-50%);
  transition: tarnsform 0.5s;
  padding-top: 6px;
  &.closing {
    animation: ${rotateOut} 0.5s ease-in-out;
  }
  &.opened {
    transform: rotate(45deg);
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
  transition: 0.5s;
`;

export const FAQQuestionText = styled.div`
  height: auto;
  padding: 0px 20px;
  position: relative;
`;

export const FAQDiv = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
`;
