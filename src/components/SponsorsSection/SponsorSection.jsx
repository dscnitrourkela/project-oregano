/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';

import { Wrapper, SectionContainer, SponsorContainer, SponsorLogo, Saber } from './styles';
import { sponsors } from '../../../config';
import { Heading2, Heading3, SectionLayout } from '../shared';

function SponsorSection() {
  const sponsorDetails = [
    {
      title: 'ALPHA SPONSORS',
      sponsors: sponsors.alpha,
      bcolor: '#A020F0',
      span: 'span 5',
      grid: 'repeat(auto-fit, minmax(120px, 1fr))',
      saber1:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672162046/HackNITR/Rectangle_635_qzr4xr.svg',
      saber2:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672161960/HackNITR/Rectangle_636_aubgds.svg',
    },
    {
      title: 'BETA SPONSORS',
      sponsors: sponsors.beta,
      bcolor: '#00FF00',
      span: 'span 5',
      grid: 'repeat(auto-fit, minmax(120px, 1fr))',
      saber1:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672160912/HackNITR/Rectangle_635_lie4ss.svg',
      saber2:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672160934/HackNITR/Rectangle_636_ngz5bl.svg',
    },
    {
      title: 'GAMMA SPONSORS',
      sponsors: sponsors.gamma,
      bcolor: '#0000FF',
      grid: 'repeat(auto-fit, minmax(120px, 1fr))',
      span: 'span 3',
      saber1:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672161089/HackNITR/orange1_dxpjir.svg',
      saber2:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672161891/HackNITR/Rectangle_636_bqza2e.svg',
    },
    {
      title: 'DELTA SPONSORS',
      sponsors: sponsors.delta,
      bcolor: '#FFA500',
      grid: 'repeat(auto-fit, minmax(120px, 1fr))',
      span: 'span 2',
      saber1:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672160505/HackNITR/orange1_g28dnp.svg',
      saber2:
        'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672161983/HackNITR/Rectangle_636_ghtugd.svg',
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