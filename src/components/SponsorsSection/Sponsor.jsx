import React from 'react';

// Components
import { Heading2, SectionLayout } from '..';
import { SponsorContainer, HeadingSection, SponsorIcon } from './styles';

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
    },
    {
      title: 'Beta Sponsors',
      sponsors: sponsors.beta,
    },
    {
      title: 'Gamma Sponsors',
      sponsors: sponsors.gamma,
    },
    {
      title: 'Delta Sponsors',
      sponsors: sponsors.delta,
    },
    {
      title: 'Authentication Partner',
      sponsors: sponsors['authentication-partner'],
    },
  ];

  return (
    <SectionLayout
      id='sponsors'
      title={sponsors.title}
      description={sponsors.content}
      link={{ text: 'Sponsor Us', link: links.sponsor }}
    >
      <div style={{ marginTop: '1rem' }} />
      {sponsorDetails.map((details) => (
        <div style={{ marginTop: '5%', marginBottom: '5%' }} key={details.title}>
          <HeadingSection>
            <Heading2
              style={{
                fontWeight: '700',
              }}
            >
              {details.title}
            </Heading2>
          </HeadingSection>
          <SponsorContainer>
            {details.sponsors.map(({ src, alt, size, link }) => (
              // eslint-disable-next-line react/no-array-index-key
              <SponsorIcon key={link} pic={src} alt={alt} size={size} link={link} />
            ))}
          </SponsorContainer>
        </div>
      ))}
    </SectionLayout>
  );
}

export default Sponsor;
