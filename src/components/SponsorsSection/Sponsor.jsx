import React from 'react';

// Components
import { Heading4, SectionLayout } from '..';
import { SponsorContainer, HeadingSection, SponsorIcon, Alpha } from './styles';

// Assets
import { sponsors } from '../../../config/content';

const links = {
  sponsor: 'https://hacknitr21.typeform.com/to/maI5lJ4t',
};

function Sponsor() {
  const sponsorDetails = [
    {
      title: 'ALPHA SPONSORS',
      sponsors: sponsors.alpha,
      bcolor: '#EBB722',
      color: '#EBB722',
      span: 'span 4',
    },
    {
      title: 'BETA SPONSORS',
      sponsors: sponsors.beta,
      bcolor: '#71A0CE',
      color: '#71A0CE',
      span: 'span 4',
    },
    {
      title: 'GAMMA SPONSORS',
      sponsors: sponsors.gamma,
      bcolor: '#E78967',
      color: '#E78967',
      span: 'span 3',
    },
    {
      title: 'DELTA SPONSORS',
      sponsors: sponsors.delta,
      bcolor: '#8FA963',
      color: '#8FA963',
    },
    {
      title: 'AUTHENTICATION PARTNER',
      sponsors: sponsors['authentication-partner'],
      bcolor: 'transparent',
      span: 'span 1',
    },
    {
      title: 'COMMUNITY PARTNER',
      sponsors: sponsors['community-partner'],
      bcolor: 'transparent',
      span: 'span 3',
    },
  ];

  return (
    <SectionLayout
      id='sponsors'
      title={sponsors.title}
      description={sponsors.content}
      link={{ text: 'Sponsor Us', link: links.sponsor }}
    >
      <div
        style={{
          marginTop: '1rem',
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gridGap: '30px' }}>
        {sponsorDetails.map((details) => (
          <Alpha
            style={{
              borderColor: details.bcolor,
              gridColumnEnd: details.span,
            }}
            key={details.title}
          >
            <HeadingSection>
              <Heading4
                style={{
                  fontWeight: '700',
                  color: details.color,
                }}
              >
                {details.title}
              </Heading4>
            </HeadingSection>
            <SponsorContainer>
              {details.sponsors.map(({ src, alt, size, link }) => (
                // eslint-disable-next-line react/no-array-index-key
                <SponsorIcon key={link} pic={src} alt={alt} size={size} link={link} />
              ))}
            </SponsorContainer>
          </Alpha>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Sponsor;
