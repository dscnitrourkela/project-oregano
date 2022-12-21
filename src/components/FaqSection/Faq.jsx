import React, { useState } from 'react';
import {
  Wrapper,
  AnswerContainer,
  FaqContainer,
  BotContainer,
  BotMessage,
  BotImg,
  Head,
  List,
  Answer,
  Arrow,
  QuestionContainer,
  Container,
} from './styles';

import { faq } from '../../../config';
import { Caption, Body2, SectionLayout, Heading2, Heading4 } from '../shared';
import { renderData } from '../../utils/parseLinks';
import FaqSet from './FaqSet';

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
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(-1);

  const [isUsed, setUsed] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = (id, question) => {
    if (open === id) {
      setOpen(-1);
    } else {
      setOpen(id);
    }
    setStage(question);
    setActive(id);
    setUsed(true);
    setTimeout(() => {
      setAnimate(true);
    }, 10);
  };

  const renderFaq = () => {
    let result = '...';
    faq.questions.forEach(({ question, answer }) => {
      if (stage === question) result = getUpdatedContent(answer);
    });
    return result;
  };

  return (
    <SectionLayout>
      <Wrapper>
        <AnswerContainer>
          <Heading4 semibold>
            R2D2 To Your Resque Ask Me Anything From There <Arrow>&#8594;</Arrow>
          </Heading4>
          {isUsed && (
            <Answer className={animate && 'animate'}>
              <Body2 className='leading-4 sm:leading-5'>{renderFaq()}</Body2>
            </Answer>
          )}
          <BotImg src={botImg.src} alt={botImg.alt} />
          <BotContainer>
            <BotMessage>
              <Caption className='text-color-tertiary'>{botMessage}</Caption>
            </BotMessage>
          </BotContainer>
        </AnswerContainer>
        <FaqContainer>
          <Head>
            <Heading2 semibold>{title}</Heading2>
            <Caption className='text-color-tertiary'>{content}</Caption>
          </Head>{' '}
          setAnimate(true);
          <div>
            <ul>
              {faq.questions.map(({ id, question }) => (
                <List
                  key={id}
                  onClick={() => {
                    setStage(question);
                    setActive(id);
                    setUsed(true);
                    setAnimate(false);

                    setTimeout(() => {
                      setAnimate(true);
                    }, 100);
                  }}
                  active={id === active}
                >
                  {question}
                </List>
              ))}
            </ul>
          </div>
        </FaqContainer>
      </Wrapper>
      <Container>
        <Heading2 semibold>Have A Question?</Heading2>
        <QuestionContainer>
          {faq.questions.map(({ id, question }) => (
            <FaqSet
              key={id}
              openState={open}
              idNum={id}
              question={question}
              answer={renderFaq()}
              handleClick={() => {
                handleClick(id, question);
              }}
            />
          ))}
        </QuestionContainer>
      </Container>
    </SectionLayout>
  );
}
