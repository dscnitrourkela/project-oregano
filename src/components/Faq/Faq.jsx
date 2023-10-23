import React, { useState } from 'react';
import {
  FAQContainer,
  FAQHeading,
  FAQCaption,
  FAQQuestionContainer,
  FAQQuestion,
  FAQIcon,
  FAQOpenIcon,
  FAQCloseIcon,
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
      answer: 'Answer to question 2.',
    },
    {
      question: 'How do I register for the hackathon?',
      answer: 'Answer to question 3.',
    },
  ];

  return (
    <FAQContainer>
      <FAQHeading>Do You Have A Question?</FAQHeading>
      <FAQCaption>New to Hackathon! Dont worry</FAQCaption>
      <FAQQuestionContainer>
        {faqData.map((faq, index) => (
          <div key={faq.question}>
            <FAQQuestion onClick={() => toggleQuestion(index)}>
              {faq.question}
              <FAQIcon isOpen={openQuestions.includes(index)}>
                {openQuestions.includes(index) ? <FAQCloseIcon /> : <FAQOpenIcon />}
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
