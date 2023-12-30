import React, { useState, useEffect } from 'react';
import {
  Heading,
  SectionBox,
  BoxHeader,
  BoxDetail,
  BoxContent,
  BoxText,
  BoxSubContent,
  BoxSubHeader,
  BoxSubDetail,
  SectionContainer,
  SectionContent,
  SectionImage,
  ProgressNumber,
  StatNumber,
  SectionCards,
  MobileBox1,
  MobileBoxHeader,
  MobileBoxContent,
  MobileContainer,
  MobileDetail,
  MobileHead,
  MobileSubContent,
  MobileSubBar,
} from './styles';

import prevstat from '../../../config/content/prevstat';

const PreviousStats = () => {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const isMobile = windowWidth < 1023;

  const imageUrl =
    'https://res.cloudinary.com/dzxgf75bh/image/upload/v1701689072/' +
    'xori1-removebg-preview_1_tbbsw8.png';

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }

    return undefined;
  }, []);

  return (
    <SectionContainer>
      <Heading id='Stats'>Previous Stats</Heading>

      {isMobile ? (
        <MobileContainer>
          {prevstat.data.map((item, id) => (
            <div key={item.id}>
              <MobileBox1>
                <MobileHead>
                  <MobileBoxHeader
                    color={prevstat.headerColors[id]}
                  >{`HACKNITR ${item.version}`}</MobileBoxHeader>
                  <MobileDetail>Detail</MobileDetail>
                </MobileHead>
                <MobileBoxContent>
                  <MobileSubContent>Registration</MobileSubContent>
                  <MobileSubBar background={prevstat.headerColors[id]} width='280px' width1='230px'>
                    <StatNumber>{item.registration}</StatNumber>
                  </MobileSubBar>
                  <MobileSubContent>Projects</MobileSubContent>
                  <MobileSubBar background={prevstat.headerColors[id]} width='250px' width1='160px'>
                    <StatNumber>{item.projects}</StatNumber>
                  </MobileSubBar>
                  <MobileSubContent>Community Partners</MobileSubContent>
                  <MobileSubBar background={prevstat.headerColors[id]} width='230px' width1='130px'>
                    <StatNumber>{item.partners}</StatNumber>
                  </MobileSubBar>
                  <MobileSubContent>Reach in Colleges</MobileSubContent>
                  <MobileSubBar background={prevstat.headerColors[id]} width='210px' width1='110px'>
                    <StatNumber>{item.reach}</StatNumber>
                  </MobileSubBar>
                </MobileBoxContent>
              </MobileBox1>
            </div>
          ))}
        </MobileContainer>
      ) : (
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
                    <BoxSubDetail background={prevstat.headerColors[id]} width='310px'>
                      <ProgressNumber>{item.registration}</ProgressNumber>
                    </BoxSubDetail>
                  </BoxSubContent>
                  <BoxSubContent>
                    <BoxSubHeader>Projects</BoxSubHeader>
                    <BoxSubDetail background={prevstat.headerColors[id]} width='290px'>
                      <ProgressNumber>{item.projects}</ProgressNumber>
                    </BoxSubDetail>
                  </BoxSubContent>

                  <BoxSubContent>
                    <BoxSubHeader>Community Partners</BoxSubHeader>
                    <BoxSubDetail background={prevstat.headerColors[id]} width='280px'>
                      <ProgressNumber>{item.partners}</ProgressNumber>
                    </BoxSubDetail>
                  </BoxSubContent>

                  <BoxSubContent>
                    <BoxSubHeader>Reach in Colleges</BoxSubHeader>
                    <BoxSubDetail background={prevstat.headerColors[id]} width='250px'>
                      <ProgressNumber>{item.reach}</ProgressNumber>
                    </BoxSubDetail>
                  </BoxSubContent>
                </BoxContent>
              </SectionBox>
            ))}
          </SectionCards>
        </SectionContent>
      )}
    </SectionContainer>
  );
};

export default PreviousStats;
