/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Content
import content from '../../../config/content/Prizes';

// Components
import { SectionLayout } from '../shared';
import Navbar from './Segments/Navbar';
import Overall from './Segments/Overall';
import Tracks from './Segments/Tracks';
import Swags from './Segments/Swags';
// eslint-disable-next-line import/no-cycle
import PrizesForAll from './Segments/PrizesForAll';

const MainContainer = styled.div`
  background: #202020;
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  padding: 40px 50px;
  padding-top: 20px;
  margin-top: 20px;

  @media (max-width: 800px) {
    padding: 20px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    height: 50px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #182848;
    border-radius: 5px;
  }
`;

const Container = styled.div`
  ${tw`
    w-11/12
    mx-auto  
  `}
`;

const Prizes = () => {
  const { id, title, description, STAGES } = content;

  const [stage, setStage] = useState(STAGES.TRACKS);

  // Stage Handlers
  const setStageToOverall = () => setStage(STAGES.OVERALL);
  const setStageToTracks = () => setStage(STAGES.TRACKS);
  const setStageToSwags = () => setStage(STAGES.SWAGS);
  const setStageToAllSubs = () => setStage(STAGES.ALL);

  const navItems = [
    // {
    //   setStage: setStageToOverall,
    //   key: STAGES.OVERALL,
    // },
    {
      setStage: setStageToTracks,
      key: STAGES.TRACKS,
    },
    {
      setStage: setStageToSwags,
      key: STAGES.SWAGS,
    },
    // {
    //   setStage: setStageToAllSubs,
    //   key: STAGES.ALL,
    // },
  ];

  const renderPrizes = () => {
    switch (stage) {
      // case STAGES.OVERALL:
      //   return <Overall />;

      case STAGES.TRACKS:
        return <Tracks />;

      case STAGES.SWAGS:
        return <Swags />;

      // case STAGES.ALL:
      //   return <PrizesForAll />;

      default:
        // return <Overall />;
        return <Tracks />;
    }
  };

  return (
    <Container>
      <SectionLayout id={id} description={description} title={title}>
        <MainContainer>
          <Navbar navItems={navItems} stage={stage} />
          {renderPrizes()}
        </MainContainer>
      </SectionLayout>
    </Container>
  );
};

export default Prizes;
