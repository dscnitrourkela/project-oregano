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
} from './Style';
import faqData from '../config/content';
import { Heading2, Heading4, Body1 } from '../shared';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
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
      {/* <FAQHeading>Do You Have A Question?</FAQHeading> */}
      <Heading2>Do You Have A Question?</Heading2>
      {/* <FAQCaption>New to Hackathon! Dont worry</FAQCaption> */}
      <FAQCaption>
        {' '}
        <Heading4>New to Hackathon! Dont worry we go</Heading4>
      </FAQCaption>
      <FAQQuestionContainer>
        {faqData.map((faq, index) => (
          <div key={faq.question}>
            <FAQQuestion
              onClick={() => toggleQuestion(index)}
              className={openQuestions.includes(index) ? 'opened' : 'closing'}
            >
              {faq.question}

              <FAQIcon
                isOpen={openQuestions.includes(index)}
                className={openQuestions.includes(index) ? 'opened' : 'closing'}
              >
                {openQuestions.includes(index) ? (
                  <span className='material-symbols-outlined'>close</span>
                ) : (
                  <span className='material-symbols-outlined'>add</span>
                )}
              </FAQIcon>

              <FAQAnswer isOpen={openQuestions.includes(index)}>
                <Body1>{faq.answer}</Body1>
              </FAQAnswer>
            </FAQQuestion>
          </div>
        ))}
      </FAQQuestionContainer>
    </FAQContainer>
  );
};

export default FAQ;
