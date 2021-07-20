import React, { useState } from "react";
import { Body, Container, Heading1 } from "../..";
import Toy from "../../../../images/Toy.png";
import Logo from "../../../../images/hackNITR.png";
import {
  List,
  List1,
  Ul,
  Ques,
  Bodydark,
  Chat,
  Bot,
  Section,
  FaqContainer,
  Heading
} from "./Faq.styles";
import STAGE from "./FaqQA";

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
        return "Hi there! I am Noni. How may I help you?";
    }
  };
  return (
    <Container>
      <Heading>
        <Heading1>Have a question?</Heading1>
        <Body>
          Vel lobortis porttitor eget dignissim. Facilisi euismod nullam nunc
          quisque egestas ridiculus sociis. Mi, aliquam, in turpis non cras diam
          elementum morbi . Blandit integer.
        </Body>
      </Heading>
      <Section>
        <Heading>
          <FaqContainer>
            <Bot>
              <img alt="" src={Toy} />
              <Chat>
                <Bodydark>{renderFaq()}</Bodydark>
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
              <img alt="" src={Logo} />
            </Ques>
          </FaqContainer>
        </Heading>
      </Section>
    </Container>
  );
}

export default Faq;