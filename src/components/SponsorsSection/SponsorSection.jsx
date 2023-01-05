import React from 'react';

// Components
import { Heading4, SectionLayout } from '..';
import { SponsorContainer, HeadingSection, SponsorIcon, Wrapper } from './styles';

// Assets
import { sponsors } from '../../../config/content';

// const links = {
//   sponsor: 'https://hacknitr21.typeform.com/to/maI5lJ4t',
// };

function Sponsor() {
  const sponsorDetails = [
    {
      title: 'ALPHA SPONSORS',
      sponsors: sponsors.alpha,
      bcolor: '#EBB722',
      color: '#EBB722',
      span: 'span 5',
      gap: '0px',
    },
    {
      title: 'BETA SPONSORS',
      sponsors: sponsors.beta,
      bcolor: '#71A0CE',
      color: '#71A0CE',
      span: 'span 5',
      gap: '30px',
    },
    // {
    //   title: 'GAMMA SPONSORS',
    //   sponsors: sponsors.gamma,
    //   bcolor: '#E78967',
    //   color: '#E78967',
    //   grid: 'repeat(auto-fit, minmax(120px, 1fr))',
    //   span: 'span 2',
    // },
    {
      title: 'DELTA SPONSORS',
      sponsors: sponsors.delta,
      bcolor: '#8FA963',
      color: '#8FA963',
      // grid: 'repeat(auto-fit, minmax(130px, 1fr))',
      span: 'span 5',
    },
    // {
    //   title: 'MEDIA PARTNERS',
    //   sponsors: sponsors['media-partners'],
    //   bcolor: 'transparent',
    //   span: 'span 5',
    //   gap: '0px',
    // },
    // {
    //   title: 'AUTHENTICATION PARTNER',
    //   sponsors: sponsors['authentication-partner'],
    //   bcolor: 'transparent',
    //   span: 'span 2',
    //   grid: '1fr 1fr 1fr ',
    // },
    // {
    //   title: 'MENTAL HEALTH PARTNER',
    //   sponsors: sponsors['mental-health-partner'],
    //   bcolor: 'transparent',
    //   span: 'span 2',
    //   grid: '1fr 1fr 1fr ',
    // },
    // {
    //   title: 'CODING PARTNER',
    //   sponsors: sponsors['coding-partner'],
    //   bcolor: 'transparent',
    //   span: 'span 1',
    //   grid: '1fr 1fr 1fr ',
    // },
  ];

  return (
    <SectionLayout
      id='sponsors'
      title={sponsors.title}
      description={sponsors.content}
      // link={{ text: 'Sponsor Us', link: links.sponsor }}
    >
      <div
        style={{
          marginTop: '1rem',
        }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.5fr 0.5fr 0.5fr 1fr',
          gridGap: '30px',
        }}
      >
        {sponsorDetails.map((details) => (
          <Wrapper
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
            <SponsorContainer style={{ gap: details.gap, gridTemplateColumns: details.grid }}>
              {details.sponsors.map(({ src, alt, size, link, margin, marginTop }) => (
                // eslint-disable-next-line react/no-array-index-key
                <SponsorIcon
                  key={link}
                  pic={src}
                  alt={alt}
                  size={size}
                  link={link}
                  margin={margin}
                  marginTop={marginTop}
                />
              ))}
            </SponsorContainer>
          </Wrapper>
        ))}
      </div>
    </SectionLayout>
  );
}

export default Sponsor;