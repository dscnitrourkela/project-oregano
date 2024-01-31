import React from 'react';
import {
  Heading,
  SectionBox,
  BoxHeader,
  BoxDetail,
  BoxContent,
  BoxText,
  BoxSubContent,
  BoxSubHeader,
  SectionContainer,
  SectionContent,
  SectionImage,
  ProgressNumber,
  SectionCards,
} from './styles';

import prevstat from '../../../config/content/prevstat';

const PreviousStats = () => {
  const imageUrl =
    'https://res.cloudinary.com/dzxgf75bh/image/upload/v1702209115/HackNitr' +
    '/PreviousStats%20Section/icgsk4elkurtcmgmptyq.png';

  return (
    <SectionContainer>
      <Heading id='Stats'>Previous Stats</Heading>
      <SectionContent>
        <SectionImage src={imageUrl} alt='xori' />
        <SectionCards>
          {prevstat.data.map((item, id) => (
            <SectionBox key={item.id}>
              <BoxText>
                <BoxHeader color={prevstat.headerColors[id]}>
                  {`HACKNITR ${item.version}`}
                </BoxHeader>
                <BoxDetail>Details</BoxDetail>
              </BoxText>
              <BoxContent>
                <BoxSubContent>
                  <BoxSubHeader>Registration</BoxSubHeader>

                  <ProgressNumber color={prevstat.headerColors[id]}>
                    {item.registration}
                  </ProgressNumber>
                </BoxSubContent>
                <BoxSubContent>
                  <BoxSubHeader>Projects</BoxSubHeader>

                  <ProgressNumber color={prevstat.headerColors[id]}>{item.projects}</ProgressNumber>
                </BoxSubContent>

                <BoxSubContent>
                  <BoxSubHeader>Community Partners</BoxSubHeader>

                  <ProgressNumber color={prevstat.headerColors[id]}>{item.partners}</ProgressNumber>
                </BoxSubContent>

                <BoxSubContent>
                  <BoxSubHeader>
                    Reach in
                    <br />
                    College
                  </BoxSubHeader>
                  <ProgressNumber color={prevstat.headerColors[id]}>{item.reach}</ProgressNumber>
                </BoxSubContent>
              </BoxContent>
            </SectionBox>
          ))}
        </SectionCards>
      </SectionContent>
    </SectionContainer>
  );
};

export default PreviousStats;
