/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { SectionLayout } from '../shared';
import Navbar from './Navbar';
import Overall from './Overall';
import Tracks from './Track';
import MLH from './MLH';
import Swags from './Swags';
import SponsoredTracks from './Sponsored';
import AllSubmissions from './AllSubmissions';

const MainContainer = styled.div`
  background: linear-gradient(90deg, #4b6cb7, #182848);
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

const STAGES = {
  OVERALL: 'Overall Prizes',
  TRACKS: 'Track Prizes',
  SPONSORED: 'Sponsored Track Prizes',
  MLH: 'MLH Goodies',
  SWAGS: 'Swags for all',
  ALL: 'All Submisssion Prizes',
};

// eslint-disable-next-line arrow-body-style
const BeAHacker = () => {
  const [stage, setStage] = useState(STAGES.OVERALL);

  // Stage Handlers
  const setStageToOverall = () => setStage(STAGES.OVERALL);
  const setStageToTracks = () => setStage(STAGES.TRACKS);
  const setStageToSponsored = () => setStage(STAGES.SPONSORED);
  const setStageToMLH = () => setStage(STAGES.MLH);
  const setStageToSwags = () => setStage(STAGES.SWAGS);
  const setStageToAllSubs = () => setStage(STAGES.ALL);

  const navItems = [
    {
      title: 'Overall',
      setStage: setStageToOverall,
      key: STAGES.OVERALL,
    },
    {
      title: 'Tracks',
      setStage: setStageToTracks,
      key: STAGES.TRACKS,
    },
    {
      title: 'Sponsored Tracks',
      setStage: setStageToSponsored,
      key: STAGES.SPONSORED,
    },
    {
      title: 'MLH Tracks',
      setStage: setStageToMLH,
      key: STAGES.MLH,
    },
    {
      title: 'Swags for all',
      setStage: setStageToSwags,
      key: STAGES.SWAGS,
    },
    {
      title: 'Prizes for all',
      setStage: setStageToAllSubs,
      key: STAGES.ALL,
    },
  ];

  const renderPrizes = () => {
    switch (stage) {
      case STAGES.OVERALL:
        return <Overall />;

      case STAGES.TRACKS:
        return <Tracks />;

      case STAGES.MLH:
        return <MLH />;

      case STAGES.SWAGS:
        return <Swags />;

      case STAGES.SPONSORED:
        return <SponsoredTracks />;

      case STAGES.ALL:
        return <AllSubmissions />;

      default:
        return <Overall />;
    }
  };

  return (
    <SectionLayout
      id='prizes'
      title='Win Exciting Prizes and Swags'
      description='Click on the tabs to see the various prizes'
    >
      <MainContainer>
        <Navbar navItems={navItems} stage={stage} />
        {renderPrizes()}
      </MainContainer>
    </SectionLayout>
  );
};

export default BeAHacker;
