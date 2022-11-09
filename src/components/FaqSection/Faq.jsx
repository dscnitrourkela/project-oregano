import React, { useState } from 'react';
import {
  Wrapper,
  AnswerContainer,
  FaqContainer,
  BotContainer,
  BotMessage,
  BotImg,
  Head,
  Ques,
  Ul,
  List,
  Answer,
} from './styles';

import FAQ from '../../../config/content/FAQ';
import { Heading3, Caption, Body1, Body2 } from '../shared';
import { renderData } from '../../utils/parseLinks';

const getUpdatedContent = (text) => {
  const updatedContent = {};

  const urlPattern = /([^+>]*)[^<]*(<a [^>]*(href="([^>^\"]*)")[^>]*>)([^<]+)(<\/a>)/gi;
  const output = text.replace(urlPattern, '$1_|_$2$3_|_$4_|_$5_|_$6').split('_|_');

  updatedContent[`body-${1}`] = output[0];
  updatedContent[`link-${1}`] = {
    href: output[2],
    text: output[3],
  };
  updatedContent[`body-${2}`] = output[4]?.split('</a>')[1];

  return renderData(updatedContent);
};

export default function Faq() {
  const { title, content, botMessage, botImg } = FAQ;
  const [stage, setStage] = useState();

  const renderFaq = () => {
    let answer = '...';
    Object.keys(FAQ.questions).forEach((key) => {
      if (stage === FAQ.questions[key].question)
        answer = getUpdatedContent(FAQ.questions[key].answer);
    });
    return answer;
  };

  return (
    <Wrapper>
      <AnswerContainer>
        <Body1 semibold>R2D2 To Your Resque Ask Me Anything From There --</Body1>
        <Answer>
          <Body2>{renderFaq()}</Body2>
        </Answer>
        <BotContainer>
          <BotImg src={botImg.src} alt={botImg.alt} />
          <BotMessage>
            <Caption>{botMessage}</Caption>
          </BotMessage>
        </BotContainer>
      </AnswerContainer>
      <FaqContainer>
        <Head>
          <Heading3 semibold>{title}</Heading3>
          <Caption>{content}</Caption>
        </Head>
        <Ques>
          <Ul>
            {Object.keys(FAQ.questions).map((key) => (
              <List
                key={key}
                onClick={() => {
                  setStage(FAQ.questions[key].question);
                }}
              >
                {FAQ.questions[key].question}
              </List>
            ))}
          </Ul>
        </Ques>
      </FaqContainer>
    </Wrapper>
  );
}
