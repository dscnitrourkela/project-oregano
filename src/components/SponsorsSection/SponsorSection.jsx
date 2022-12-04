/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';

import { Wrapper, SectionContainer, SponsorContainer, SponsorLogo, Saber } from './styles';
import { sponsors } from '../../../config';
import { Heading2, Heading3, SectionLayout } from '../shared';
import saberAlpha1 from '../../../images/saberAlpha1.png';
import saberAlpha2 from '../../../images/saberAlpha2.png';
import saberBeta1 from '../../../images/saberBeta1.png';
import saberBeta2 from '../../../images/saberBeta2.png';

function SponsorSection() {
  const sponsorDetails = [
    {
      title: 'ALPHA SPONSORS',
      sponsors: sponsors.alpha,
      bcolor: '#A020F0',
      span: 'span 5',
      saber: 1,
    },
    {
      title: 'BETA SPONSORS',
      sponsors: sponsors.beta,
      bcolor: '#00FF00',
      span: 'span 5',
      gap: '30px',
      saber: 2,
    },
    // {
    //   title: 'GAMMA SPONSORS',
    //   sponsors: sponsors.gamma,
    //   bcolor: '#0000FF',
    //   grid: 'repeat(auto-fit, minmax(120px, 1fr))',
    //   span: 'span 2',
    // },
    // {
    //   title: 'DELTA SPONSORS',
    //   sponsors: sponsors.delta,
    //   bcolor: '#FFA500',
    //   grid: 'repeat(auto-fit, minmax(130px, 1fr))',
    //   span: 'span 3',
    // },
    // {
    //   title: 'MEDIA PARTNERS',
    //   sponsors: sponsors['media-partners'],
    //   bcolor: 'white',
    //   span: 'span 5',
    // },
    // {
    //   title: 'AUTHENTICATION PARTNER',
    //   sponsors: sponsors['authentication-partner'],
    //   bcolor: 'white',
    //   span: 'span 2',
    // },
    // {
    //   title: 'MENTAL HEALTH PARTNER',
    //   sponsors: sponsors['mental-health-partner'],
    //   bcolor: 'white',
    //   span: 'span 2',
    // },
    // {
    //   title: 'CODING PARTNER',
    //   sponsors: sponsors['coding-partner'],
    //   bcolor: 'white',
    //   span: 'span 1',
    // },
  ];

  return (
    <SectionLayout>
      <div className='w-full  mb-9'>
        <Heading2 semibold>SPONSORS</Heading2>
      </div>
      <div className='w-full grid gap-9 '>
        {sponsorDetails.map((details, idx) => (
          <Wrapper
            key={idx}
            brcol={details.bcolor}
            style={{
              gridColumnEnd: details.span,
            }}
          >
            <SectionContainer>
              <Heading3 semibold>{details.title}</Heading3>
              <Saber className='saber-img'>
                {details.saber === 1 ? (
                  // <img src={} />
                  <>
                    <img src={saberAlpha1} alt='saber' className='fix' />
                    <img src={saberAlpha2} alt='saber' className='movable' />
                  </>
                ) : details.saber === 2 ? (
                  <>
                    <img src={saberBeta1} alt='saber' className='fix' />
                    <img src={saberBeta2} alt='saber' className='movable' />
                  </>
                ) : (
                  <div />
                )}
              </Saber>
            </SectionContainer>

            <SponsorContainer style={{ gap: details.gap, gridTemplateColumns: details.grid }}>
              {details.sponsors.map(({ src, alt, size, link }, index) => (
                <SponsorLogo key={index}>
                  {src ? (
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                      <img src={src} alt={alt} style={{ width: size }} />
                    </a>
                  ) : (
                    <div />
                  )}
                </SponsorLogo>
              ))}
            </SponsorContainer>
          </Wrapper>
        ))}
      </div>
    </SectionLayout>
  );
}

export default SponsorSection;
