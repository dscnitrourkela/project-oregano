import React, { useState } from 'react';

// Components
import { Body, Heading1, SectionContainer, Heading5, WhyWait } from '..';
import {
  List,
  List1,
  Ul,
  Ques,
  Chat,
  Bot,
  Section,
  FaqContainer,
  Heading,
  Img,
  Sub,
} from './styles';

// Assets
import { faq } from '../../../config/content';

function Faq() {
  const [stage, setStage] = useState();
  const { questions, title, content, toyImg, HackNITR } = faq;

  const setStageToQuesa = () => setStage(questions.one.question);
  const setStageToQuesb = () => setStage(questions.two.question);
  const setStageToQuesc = () => setStage(questions.three.question);
  const setStageToQuesd = () => setStage(questions.four.question);
  const setStageToQuese = () => setStage(questions.five.question);
  const setStageToQuesf = () => setStage(questions.six.question);
  const setStageToQuesg = () => setStage(questions.seven.question);

  const renderFaq = () => {
    switch (stage) {
      case questions.one.question:
        return questions.one.answer;
      case questions.two.question:
        return questions.two.answer;
      case questions.three.question:
        return questions.three.answer;
      case questions.four.question:
        return questions.four.answer;
      case questions.five.question:
        return questions.five.answer;
      case questions.six.question:
        return questions.six.answer;
      case questions.seven.question:
        return questions.seven.answer;
      default:
        return 'Hi there! I am Noni. How may I help you?';
    }
  };

  return (
    <SectionContainer>
      <Heading>
        <Heading1>{title}</Heading1>
        <Sub>
          <Body>{content}</Body>
        </Sub>
      </Heading>

      <Section>
        <FaqContainer>
          <Bot>
            <Img alt={toyImg.alt} src={toyImg.src} />
            <Chat>
              <Heading5>{renderFaq()}</Heading5>
            </Chat>
          </Bot>

          <Ques>
            <Ul>
              <List onClick={setStageToQuesa}>{questions.one.question}</List>
              <List onClick={setStageToQuesb}>{questions.two.question}</List>
              <List onClick={setStageToQuesc}>{questions.three.question}</List>
              <List onClick={setStageToQuesd}>{questions.four.question}</List>
              <List onClick={setStageToQuese}>{questions.five.question}</List>
              <List onClick={setStageToQuesf}>{questions.six.question}</List>
              <List1 onClick={setStageToQuesg}>{questions.seven.question}</List1>
            </Ul>
            <img alt={HackNITR.alt} src={HackNITR.src} />
          </Ques>
        </FaqContainer>
        <WhyWait />
      </Section>
    </SectionContainer>
  );
}

export default Faq;
