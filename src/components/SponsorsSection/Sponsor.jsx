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
      sponsors: sponsors.alpha,
    },
    {
      title: 'Gamma Sponsors',
      sponsors: sponsors.alpha,
    },
    {
      title: 'Delta Sponsors',
      sponsors: sponsors.alpha,
    },
  ];

  return (
    <SectionLayout
      title={sponsors.title}
      description={sponsors.content}
      link={{ text: 'Sponsor Us', link: links.sponsor }}
    >
      <div style={{ marginTop: '1rem' }} />
      {sponsorDetails.map((details) => (
        <React.Fragment key={details.title}>
          <HeadingSection>
            <Heading2>{details.title}</Heading2>
          </HeadingSection>
          <SponsorContainer>
            {details.sponsors.map(({ src, alt }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SponsorIcon key={`${details.title}-${alt}-${index}`} pic={src} alt={alt} />
            ))}
          </SponsorContainer>
        </React.Fragment>
      ))}
    </SectionLayout>
  );
}

export default Sponsor;
