import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Heading4 } from '..';
import SessionList from './SessionList';
import Slido from './Slido';

const Box = styled.div`
  grid-column: 2/3;
  border-radius: 4px;
  height: auto;
  max-height: calc(100vh - 150px);
  overflow-y: hidden;
  padding-bottom: 0px;
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #17171d;
  border-radius: 4px;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.6); */
`;

const NavItem = styled(Heading4)`
  border-radius: 4px;
  padding: 0.5rem 0.7rem;
  width: 33%;
  text-align: center;

  &:hover {
    background: #24242b;
    cursor: pointer;
  }
`;

const STAGE = {
  DISCUSS: 'Discuss',
  SCHEDULE: 'Schedule',
  DISCORD: 'Live Chat',
};

const Interaction = ({ containerDimensions, sessionDetails }) => {
  const [stage, setStage] = useState(STAGE.DISCUSS);

  const setStageToDiscuss = () => setStage(STAGE.DISCUSS);
  const setStageToSchedule = () => setStage(STAGE.SCHEDULE);
  const setStageToDiscord = () => {
    setStage(STAGE.DISCORD);
    if (window) {
      window.open('https://hacknitr.tech/discord', '_blank');
    }
  };

  const renderStage = () => {
    switch (stage) {
      case STAGE.DISCUSS:
        return <Slido containerDimensions={containerDimensions} />;

      case STAGE.SCHEDULE:
        return <SessionList sessionDetails={sessionDetails} />;

      case STAGE.DISCORD:
        return <Slido containerDimensions={containerDimensions} />;

      default:
        return <Slido containerDimensions={containerDimensions} />;
    }
  };

  return (
    <Box>
      <NavContainer>
        <NavItem onClick={setStageToDiscuss}>Discuss</NavItem>
        <NavItem onClick={setStageToSchedule}>Schedule</NavItem>
        <NavItem onClick={setStageToDiscord}>Discord</NavItem>
      </NavContainer>
      {renderStage()}
    </Box>
  );
};

export default Interaction;
