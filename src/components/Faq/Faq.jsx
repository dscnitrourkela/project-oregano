/* eslint-disable max-len */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  FAQContainer,
  FAQCaption,
  FAQQuestionContainer,
  FAQQuestion,
  FAQIcon,
  FAQAnswer,
  FAQQuestionText,
  FAQDiv,
  FAQHeading,
  StyledLink,
} from './styles';
import faqData from '../../../config/content/Faq';
import { SectionContainer } from '../shared';

/**
 *
 * @param {String} data
 * @description This function takes in the data and returns while sprinkling the data with the necessary HTML tags.
 */
const preProcess = (data) => {
  // Add body tags to the data for parsing
  const body = `<body>${data}</body>`;
  const parser = new DOMParser();
  const parsed = parser.parseFromString(body, 'text/html');

  // Map over parsed data and return array of strings, anchor elements, bold elements and italic elements
  const parsedData = Array.from(parsed.body.childNodes).map((node) => {
    switch (node.nodeName) {
      case 'A':
        return (
          <StyledLink href={node.attributes.href.value} target='_blank' rel='noreferrer'>
            {node.textContent}
          </StyledLink>
        );
      case 'STRONG':
        return <strong>{node.textContent}</strong>;
      case 'EM':
        return <em>{node.textContent}</em>;
      default:
        return node.textContent;
    }
  });

  return parsedData;
};

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);
  const [animationState, setAnimationState] = useState(Array(faqData.questions.length).fill(''));

  const toggleQuestion = (index) => {
    const newAnimationStates = [...animationState];
    if (newAnimationStates[index] === '') {
      newAnimationStates[index] = 'opened';
    } else if (newAnimationStates[index] === 'opened') {
      newAnimationStates[index] = 'closing';
    } else {
      newAnimationStates[index] = 'opened';
    }
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((item) => item !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
    setAnimationState(newAnimationStates);
  };

  return (
    <SectionContainer>
      <FAQContainer id='FAQs'>
        <Helmet>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
          />
        </Helmet>
        <FAQHeading>{faqData.title}</FAQHeading>
        <FAQCaption>{faqData.content}</FAQCaption>
        <FAQQuestionContainer>
          {faqData.questions.map((faq, index) => (
            <div key={faq.question} className='w-full'>
              <FAQQuestion
                onClick={() => toggleQuestion(index)}
                className={openQuestions.includes(index) ? 'opened' : 'closing'}
              >
                <FAQDiv>
                  <FAQQuestionText>{faq.question}</FAQQuestionText>
                  <FAQIcon isOpen={openQuestions.includes(index)} className={animationState[index]}>
                    <span className='material-symbols-outlined'>add</span>
                  </FAQIcon>
                </FAQDiv>
                <FAQAnswer isOpen={openQuestions.includes(index)}>
                  {preProcess(faq.answer)}
                </FAQAnswer>
              </FAQQuestion>
            </div>
          ))}
        </FAQQuestionContainer>
      </FAQContainer>
    </SectionContainer>
  );
};

export default FAQ;
