/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';

import { sponsors } from '../../../config';
import {
  Heading2,
  Heading3,
  SectionLayout,
} from '../shared';
import {
  Saber,
  SectionContainer,
  SponsorContainer,
  SponsorLogo,
  Wrapper,
} from './styles';

function SponsorSection() {
  const sponsorDetails = [
    {
      title: 'ALPHA SPONSORS',
      sponsors: sponsors.alpha,
      bcolor: '#A020F0',
      span: 'span 3',
      grid: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      saber1:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673028463/HackNITR/Rectangle_635_qzr4xr_lvuqxu.svg',
      saber2:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673028463/HackNITR/Rectangle_636_aubgds_n0mcnd.svg',
    },
    {
      title: 'BETA SPONSORS',
      sponsors: sponsors.beta,
      bcolor: '#00FF00',
      span: 'span 2',
      grid: 'repeat(auto-fit, minmax(200px, 1fr))',
      saber1:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673028463/HackNITR/Rectangle_635_lie4ss_u78l00.svg',
      saber2:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673028463/HackNITR/Rectangle_636_ngz5bl_p3mxvc.svg',
    },
    {
      title: 'GAMMA SPONSORS',
      sponsors: sponsors.gamma,
      bcolor: '#0000FF',
      grid: 'repeat(auto-fit, minmax(200px, 1fr))',
      span: 'span 5',
      saber1:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673027915/HackNITR/orange1_dxpjir_ioffgz.svg',
      saber2:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673028463/HackNITR/Rectangle_636_bqza2e_x369n0.svg',
    },
    {
      title: 'DELTA SPONSORS',
      sponsors: sponsors.delta,
      bcolor: '#FFA500',
      grid: 'repeat(auto-fit, minmax(200px, 1fr))',
      span: 'span 5',
      saber1:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673027915/HackNITR/orange1_g28dnp_zrrmz8.svg',
      saber2:
        'https://res.cloudinary.com/dujqfyato/image/upload/v1673028463/HackNITR/Rectangle_636_ghtugd_hnah07.svg',
    },
  ];

  return (
    <SectionLayout id={sponsors.id}>
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
                <img src={details.saber1} alt='saber' className='fix' />
                <img src={details.saber2} alt='saber' className='movable' />
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
