import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { SectionLayout } from '../shared';
import Overall from './Overall';

const MainContainer = styled.div`
  background: linear-gradient(90deg, #4b6cb7, #182848);
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  padding: 40px 50px;
  margin-top: 20px;
`;

// const STAGES = {
//   OVERALL: 'Overall Prizes',
//   TRACKS: 'Track Prizes',
//   SPONSORED: 'Sponsored Track Prizes',
//   MLH: 'MLH Goodies',
// };
// eslint-disable-next-line arrow-body-style
const BeAHacker = () => {
  // const [state, setStage] = useState(STAGES.OVERALL);

  // Stage Handlers
  // const setStageToOverall = setStage(STAGES.OVERALL);
  // const setStageToTracks = setStage(STAGES.TRACKS);
  // const setStageToSponsored = setStage(STAGES.SPONSORED);
  // const setStageToMLH = setStage(STAGES.MLH);

  return (
    <SectionLayout
      title='Win Exciting Prizes and Swags'
      description='Click on the tabs to see the various prizes'
    >
      <MainContainer>
        <Overall />
      </MainContainer>
    </SectionLayout>
  );
};

export default BeAHacker;
