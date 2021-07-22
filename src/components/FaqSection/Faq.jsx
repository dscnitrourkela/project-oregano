import React, { useState } from 'react';
import { Body, Container, Heading1, SectionContainer, Heading5 } from '..';
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
} from './Faq.styles';
import STAGE from './FaqData';

function Faq() {
  const [stage, setStage] = useState();
  const setStageToQuesa = () => setStage(STAGE.QUESA);
  const setStageToQuesb = () => setStage(STAGE.QUESB);
  const setStageToQuesc = () => setStage(STAGE.QUESC);
  const setStageToQuesd = () => setStage(STAGE.QUESD);
  const setStageToQuese = () => setStage(STAGE.QUESE);
  const setStageToQuesf = () => setStage(STAGE.QUESF);
  const setStageToQuesg = () => setStage(STAGE.QUESG);

  const renderFaq = () => {
    switch (stage) {
      case STAGE.QUESA:
        return STAGE.ANSA;
      case STAGE.QUESB:
        return STAGE.ANSB;
      case STAGE.QUESC:
        return STAGE.ANSC;
      case STAGE.QUESD:
        return STAGE.ANSD;
      case STAGE.QUESE:
        return STAGE.ANSE;
      case STAGE.QUESF:
        return STAGE.ANSF;
      case STAGE.QUESG:
        return STAGE.ANSG;
      default:
        return 'Hi there! I am Noni. How may I help you?';
    }
  };
  return (
    <SectionContainer>
      <Container>
        <Heading>
          <Heading1>Have a question?</Heading1>
          <Body>
            Vel lobortis porttitor eget dignissim. Facilisi euismod nullam nunc quisque egestas
            ridiculus sociis. Mi, aliquam, in turpis non cras diam elementum morbi . Blandit
            integer.
          </Body>
        </Heading>
        <Section>
          <FaqContainer>
            <Bot>
              <Img
                alt='Toy'
                src='https://res.cloudinary.com/dalqfvowk/image/
upload/project-oregano/assets/xbwwfhvfpz5q9cartqll.png'
              />
              <Chat>
                <Heading5>{renderFaq()}</Heading5>
              </Chat>
            </Bot>
            <Ques>
              <Ul>
                <List onClick={setStageToQuesa}>{STAGE.QUESA}</List>
                <List onClick={setStageToQuesb}>{STAGE.QUESB}</List>
                <List onClick={setStageToQuesc}>{STAGE.QUESC}</List>
                <List onClick={setStageToQuesd}>{STAGE.QUESD}</List>
                <List onClick={setStageToQuese}>{STAGE.QUESE}</List>
                <List onClick={setStageToQuesf}>{STAGE.QUESF}</List>
                <List1 onClick={setStageToQuesg}>{STAGE.QUESG}</List1>
              </Ul>
              <img
                alt='Logo'
                src='https://res.cloudinary.com/dalqfvowk/image/
upload/project-oregano/assets/tu2yrxfthhkv6kg4bhjp.png'
              />
            </Ques>
          </FaqContainer>

          <FaqContainer>
            <Bot>
              <Img
                alt='Toy'
                src='https://res.cloudinary.com/dalqf
vowk/image/upload/project-oregano/assets/xbwwfhvfpz5q9cartqll.png'
              />
              <Chat>
                <Heading5>{renderFaq()}</Heading5>
              </Chat>
            </Bot>
            <Ques>
              <Ul>
                <List onClick={setStageToQuesa}>{STAGE.QUESA}</List>
                <List onClick={setStageToQuesb}>{STAGE.QUESB}</List>
                <List onClick={setStageToQuesc}>{STAGE.QUESC}</List>
                <List onClick={setStageToQuesd}>{STAGE.QUESD}</List>
                <List onClick={setStageToQuese}>{STAGE.QUESE}</List>
                <List onClick={setStageToQuesf}>{STAGE.QUESF}</List>
                <List1 onClick={setStageToQuesg}>{STAGE.QUESG}</List1>
              </Ul>
              <img
                alt='Logo'
                src='https://res.cloudinary.com/dalqfvowk/imag
e/upload/project-oregano/assets/tu2yrxfthhkv6kg4bhjp.png'
              />
            </Ques>
          </FaqContainer>
        </Section>
      </Container>
    </SectionContainer>
  );
}

export default Faq;
