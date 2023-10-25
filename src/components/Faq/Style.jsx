import styled,{keyframes} from 'styled-components';

// const fadeOutAndIn = keyframes`
//   0%, 100% {
//     opacity: 1;
//     transform: scale(1);
//   }
//   50% {
//     opacity: 0;
//     transform: scale(0.8);
//   }
// `;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const FAQContainer = styled.div`
  width: 1162px;
  height: 1380px;
  position: absolute;
  top: 6109px;
  left: 139px;
  gap: 32px;
  display: flex; /* Center the heading */
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

export const FAQCaption = styled.div`
  width: 958px;
  height: 36px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  text-align: center;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 16px;
  }
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
    gap: 12px;
  }
`;

export const FAQQuestion = styled.div`
 justify-content: space-between;
  display: flex;
  padding: 16px 36px;
  align-items: flex-start;
  gap: 404px;
  border-radius: 16px;
  border: 2px solid var(--neutral-3, #d9d9d9) ;
  gap: 36px;
  color: #fff;
  font-family: Prompt;
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  width: 1162px;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.4s;
  
  &.opened {
    border: 2px solid #00ccff; /* Light water blue border color */
    background: rgba(0, 0, 255, 0.1); /* Magenta blue background color with transparency */
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
  //   top: 12px;
  right: 36px;
  position: absolute;
  tarnsform: translateY(-50%);
  transition: 0.4s;
  
  &.closing {
    animation: ${fadeOut} 1s ease-in-out;
  }

  &.opened {
    animation: ${fadeIn} 1s ease-in-out;
  }
  
`;

export const FAQAnswer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: 16px;
  color: #fff;
  right: 878px;
  position: relative;
  padding: 20px;
  transition: 0.4s;
  
`;
