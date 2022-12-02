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

import { faq } from '../../../config';
import { Caption, Body1, Body2, SectionLayout, Heading2 } from '../shared';
import { renderData } from '../../utils/parseLinks';

const getUpdatedContent = (text) => {
  const updatedContent = {};

  const urlPattern = /([^+>]*)[^<]*(<a [^>]*(href="([^>^"]*)")[^>]*>)([^<]+)(<\/a>)/gi;
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
  const { title, content, botMessage, botImg } = faq;
  const [stage, setStage] = useState();

  const renderFaq = () => {
    let answer = '...';
    Object.keys(faq.questions).forEach((key) => {
      if (stage === faq.questions[key].question)
        answer = getUpdatedContent(faq.questions[key].answer);
    });
    return answer;
  };

  return (
    <SectionLayout>
      <Wrapper>
        <AnswerContainer>
          <Body1 semibold>R2D2 To Your Resque Ask Me Anything From There --</Body1>
          <Answer>
            <Body2 className='leading-4 sm:leading-5'>{renderFaq()}</Body2>
          </Answer>
          <BotContainer>
            <BotImg src={botImg.src} alt={botImg.alt} />
            <BotMessage>
              <Caption className='text-[#D6D6D6] sm:text-xs md:text-sm'>{botMessage}</Caption>
            </BotMessage>
          </BotContainer>
        </AnswerContainer>
        <FaqContainer>
          <Head>
            <Heading2 semibold>{title}</Heading2>
            <Caption className='text-color-tertiary mt-1'>{content}</Caption>
          </Head>
          <Ques>
            <Ul>
              {Object.keys(faq.questions).map((key) => (
                <List
                  key={key}
                  onClick={() => {
                    setStage(faq.questions[key].question);
                  }}
                >
                  {faq.questions[key].question}
                </List>
              ))}
            </Ul>
          </Ques>
        </FaqContainer>
      </Wrapper>
    </SectionLayout>
  );
}
