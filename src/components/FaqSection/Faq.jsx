/* eslint-disable prefer-destructuring */
import React, { useState } from 'react';

// Components
import { Heading5, WhyWait, SectionLayout } from '..';
import { List, List1, Ul, Ques, Chat, Bot, Wrapper, FaqContainer, Img } from './styles';

// Assets
import { faq } from '../../../config/content';
import { renderData } from '../../utils/parseLinks';

const getUpdatedContent = (text) => {
  const updatedContent = {};
  // eslint-disable-next-line no-useless-escape
  const urlPattern = /([^+>]*)[^<]*(<a [^>]*(href="([^>^\"]*)")[^>]*>)([^<]+)(<\/a>)/gi;
  const output = text.replace(urlPattern, '$1_|_$2$3_|_$4_|_$5_|_$6').split('_|_');

  updatedContent[`body-${1}`] = output[0];
  updatedContent[`link-${1}`] = {
    href: output[2],
    text: output[3],
  };
  updatedContent[`body-${2}`] = output[4]?.split('</a>')[1];

  return renderData(updatedContent, true);
};

function Faq() {
  const [stage, setStage] = useState();
  const { id, questions, title, content, toyImg, HackNITR } = faq;

  const setStageToQuesa = () => setStage(questions.one.question);
  const setStageToQuesb = () => setStage(questions.two.question);
  const setStageToQuesc = () => setStage(questions.three.question);
  const setStageToQuesd = () => setStage(questions.four.question);
  const setStageToQuese = () => setStage(questions.five.question);
  const setStageToQuesf = () => setStage(questions.six.question);
  const setStageToQuesg = () => setStage(questions.seven.question);
  const setStageToQuesh = () => setStage(questions.eight.question);

  const renderFaq = () => {
    switch (stage) {
      case questions.one.question:
        return getUpdatedContent(questions.one.answer);
      case questions.two.question:
        return getUpdatedContent(questions.two.answer);
      case questions.three.question:
        return getUpdatedContent(questions.three.answer);
      case questions.four.question:
        return getUpdatedContent(questions.four.answer);
      case questions.five.question:
        return getUpdatedContent(questions.five.answer);
      case questions.six.question:
        return getUpdatedContent(questions.six.answer);
      case questions.seven.question:
        return getUpdatedContent(questions.seven.answer);
      case questions.eight.question:
        return getUpdatedContent(questions.eight.answer);
      default:
        return '...';
    }
  };

  return (
    <SectionLayout id={id} title={title} description={content}>
      <Wrapper>
        <FaqContainer>
          <Bot>
            <Img alt={toyImg.alt} src={toyImg.src} />
            <Chat>
              <Heading5>Hi there! I am Xori. How may I help you?</Heading5>
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
              <List onClick={setStageToQuesg}>{questions.seven.question}</List>
              <List1 onClick={setStageToQuesh}>{questions.eight.question}</List1>
            </Ul>
            <img alt={HackNITR.alt} src={HackNITR.src} />
          </Ques>

          <Bot>
            <Img alt={toyImg.alt} src={toyImg.src} />
            <Chat>
              <Heading5>{renderFaq()}</Heading5>
            </Chat>
          </Bot>
        </FaqContainer>

        <WhyWait />
      </Wrapper>
    </SectionLayout>
  );
}

export default Faq;
