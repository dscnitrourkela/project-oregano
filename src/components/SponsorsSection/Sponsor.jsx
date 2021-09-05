import React from 'react';

// Components
import { Heading3, SectionLayout } from '..';
import {
  SponsorContainer,
  HeadingSection,
  SponsorIcon,
  Alpha,
  Alpha2,
  Alpha3,
  Hello,
} from './styles';

// Assets
import { sponsors } from '../../../config/content';

const links = {
  sponsor: 'https://hacknitr21.typeform.com/to/maI5lJ4t',
};

function Sponsor() {
  const sponsorDetails = [
    {
      title: 'Alpha Sponsors',
      sponsors: sponsors.alpha,
      bcolor: '#EBB722',
      color: '#EBB722',
      // span: 'span-4',
      span: 'span 4',
    },
    {
      title: 'Beta Sponsors',
      sponsors: sponsors.beta,
      bcolor: '#71A0CE',
      color: '#71A0CE',
      span: 'span 4',
    },
    {
      title: 'Gamma Sponsors',
      sponsors: sponsors.gamma,
      bcolor: '#E78967',
      color: '#E78967',
      span: 'span 3',
    },
    {
      title: 'Delta Sponsors',
      sponsors: sponsors.delta,
      bcolor: '#8FA963',
      color: '#8FA963',
    },
    {
      title: 'Authentication Partner',
      sponsors: sponsors['authentication-partner'],
      bcolor: 'transparent',
      span: 'span 1',
    },
    {
      title: 'Community Partner',
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
              <Heading3
                style={{
                  fontWeight: '700',
                  color: details.color,
                }}
              >
                {details.title}
              </Heading3>
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
