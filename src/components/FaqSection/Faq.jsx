/* eslint-disable prefer-destructuring */
import React, { useState, useRef } from 'react';

// Components
import { Heading5, WhyWait, SectionLayout } from '..';
import { List, Ul, Ques, Chat, Bot, Wrapper, FaqContainer, Img } from './styles';

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

  const renderFaq = () => {
    let answer = '...';
    Object.keys(faq.questions).forEach((key) => {
      if (stage === faq.questions[key].question)
        answer = getUpdatedContent(faq.questions[key].answer);
    });
    return answer;
  };

  const articleRef = useRef();

  const executeScroll = () => articleRef.current.scrollIntoView({ behavior: 'smooth' });

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
            <Ul ref={articleRef}>
              {Object.keys(faq.questions).map((key) => (
                <List
                  key={key}
                  onClick={() => {
                    executeScroll();
                    setStage(faq.questions[key].question);
                  }}
                >
                  {faq.questions[key].question}
                </List>
              ))}
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
