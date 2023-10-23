import styled from 'styled-components';

export const FAQContainer = styled.div`
  width: 1162px;
  height: 1380px;
  position: absolute;
  top: 6109px;
  left: 139px;
  gap: 32px;
`;

export const FAQHeading = styled.div`
  width: 612px;
  height: 64px;
  font-size: 48px;
  font-weight: 600;
  line-height: 64px;
  color: #fff;
`;

export const FAQCaption = styled.div`
  width: 958px;
  height: 36px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;

  color: #fff;
`;

export const FAQQuestionContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const FAQQuestion = styled.div`
  display: flex;
  padding: 16px 36px;
  align-items: center;
  gap: 404px;
  border-radius: 16px;
  border: 2px solid var(--neutral-3, #d9d9d9);
  gap: 36px;
  color: #fff;
  font-family: Prompt;
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  width: 638px;
  cursor: pointer;
`;

export const FAQIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 12px;
  top: 12px;
`;

export const FAQOpenIcon = styled.div`
  content: '+';
`;

export const FAQCloseIcon = styled.div`
  content: '×';
`;

export const FAQAnswer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: 16px;
  color: #fff;
`;
