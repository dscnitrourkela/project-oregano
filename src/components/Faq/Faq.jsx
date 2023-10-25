/* eslint-disable max-len */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  FAQContainer,
  FAQHeading,
  FAQCaption,
  FAQQuestionContainer,
  FAQQuestion,
  FAQIcon,
  FAQAnswer,
} from './Style';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((item) => item !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const faqData = [
    {
      question: 'How do I register for the hackathon?',
      answer: 'Answer to question 1.',
    },
    {
      question: 'How do I register for the hackathon?',
      answer: 'Answer to question 2..',
    },
    {
      question: 'How do I register for the hackathon?',
      answer: 'Answer to question 3.',
    },
  ];

  return (
    <FAQContainer>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
        />
      </Helmet>
      <FAQHeading>Do You Have A Question?</FAQHeading>
      <FAQCaption>New to Hackathon! Dont worry</FAQCaption>
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

              <FAQAnswer isOpen={openQuestions.includes(index)}>{faq.answer}</FAQAnswer>
            </FAQQuestion>
          </div>
        ))}
      </FAQQuestionContainer>
    </FAQContainer>
  );
};

export default FAQ;
