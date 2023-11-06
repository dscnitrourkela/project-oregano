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
} from './styles';
import faqData from '../../../config/content/Faq';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);
  const [animationState, setAnimationState] = useState('');

  const toggleQuestion = (index) => {
    if (animationState === '') {
      setAnimationState('opened');
    } else if (animationState === 'opened') {
      setAnimationState('closing');
    } else {
      setAnimationState('opened');
    }
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((item) => item !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  return (
    <FAQContainer>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        />
      </Helmet>
      <FAQHeading>Do You Have A Question?</FAQHeading>
      <FAQCaption>
        New to Hackathon! Don’t worry we got you covered with all the basic information.
      </FAQCaption>
      <FAQQuestionContainer>
        {faqData.map((faq, index) => (
          <div key={faq.question} className='w-full'>
            <FAQQuestion
              onClick={() => toggleQuestion(index)}
              className={openQuestions.includes(index) ? 'opened' : 'closing'}
            >
              <FAQDiv>
                <FAQQuestionText>{faq.question}</FAQQuestionText>

                <FAQIcon isOpen={openQuestions.includes(index)} className={animationState}>
                  <span className='material-symbols-outlined'>add</span>
                </FAQIcon>
              </FAQDiv>

              <FAQAnswer isOpen={openQuestions.includes(index)}>{faq.answer}</FAQAnswer>
            </FAQQuestion>
          </div>
        ))}
      </FAQQuestionContainer>
    </FAQContainer>
  );
};

export default FAQ;
