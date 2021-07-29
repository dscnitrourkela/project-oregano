import React from 'react';

// Components
import { Heading1, Heading2, SectionContainer } from '..';
import { SponsorContainer, HeadingSection, HeadText, SponsorIcon } from './styles';

// Assets
import { sponsors } from '../../../config/content';

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
    <SectionContainer>
      <HeadingSection>
        <Heading1>{sponsors.title}</Heading1>

        <HeadText>
          {sponsors.content}
          <a href='/'> Sponsor Us</a>
        </HeadText>
      </HeadingSection>

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
    </SectionContainer>
  );
}

export default Sponsor;
