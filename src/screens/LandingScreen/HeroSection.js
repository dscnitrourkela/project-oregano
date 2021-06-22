import { Box, Container, Heading, Image, Text, Grid } from 'theme-ui';
import theme from '../../lib/theme';

import SlideDown from '../../components/slide-down';

import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';

const floating = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-20px);
  }
`;

// (msw) Credit for this totally goes to https://codepen.io/WebSonick/pen/vjmgu
const twinkling = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
`;

const color = theme.colors.primary;

const HeroSection = () => {
  return (
    <Box
      id="hero-section"
      as="main"
      sx={{
        pt: [5],
        pb: 5,
        bg: 'dark',
        color: 'muted',
        textAlign: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage:
          'url(https://cloud-8j1jfvspm.vercel.app/2020-07-24_stars.svg)',
        backgroundSize: '512px auto'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
          background:
            'transparent url(https://cloud-c5tvihg15.vercel.app/2020-07-24_afnkcwju2hfkbrkc1ee0h5a5y72a2r5f.png) repeat top center',
          animation: `${twinkling} 200s linear infinite`
        }}
      ></Box>
      <SlideDown
        variant="layout.narrow"
        duration={768}
        sx={{ position: 'relative' }}
      >
        <Heading
          as="h1"
          variant="ultratitle"
          mt={[3, 5]}
          sx={{
            color,
            textTransform: 'uppercase',
            WebkitTextStroke: 'white',
            WebkitTextStrokeWidth: '2px',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 1px ${color}) drop-shadow(0 0 2px ${color}) drop-shadow(0 0 6px ${color})`
          }}
        >
          HACKNITR 3.0
        </Heading>
        <Text
          as="h6"
          variant="subtitle"
          mt={2}
          mb={[4, 3]}
          sx={{
            fontSize: [2, 4],
            fontWeight: 'bold'
          }}
        >
          29 - 31 October, 2021
        </Text>

        <Grid
          gap={[2, 3]}
          columns={[1, 1]}
          sx={{
            display: 'flex',
            flexDirection: ['column', 'column']
          }}
        >
          <Box>
            <a href="https://hacknitr.tech/discord" target="_blank">
              <Image
                sx={{
                  maxHeight: '50px',
                  backgroundColor: '#fff',
                  pl: '4rem',
                  pr: '4rem',
                  pt: '0.3rem',
                  pb: '0.3rem',
                  borderRadius: '3px'
                }}
                src="/images/discordblack.png"
                alt="Discord Button"
              />
            </a>
          </Box>

          <Box>
            <div
              className="apply-button"
              data-hackathon-slug="hacknitr3"
              data-button-theme="dark-inverted"
              style={{ height: '44px', width: '312px' }}
            >
              <script
                defer
                async
                src="https://apply.devfolio.co/v2/sdk.js"
              ></script>
            </div>
          </Box>
        </Grid>
      </SlideDown>

      <Container
        variant="narrow"
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 256,
          minHeight: 256,
          mx: 'auto',
          mt: [4, 3],
          img: {
            position: 'absolute',
            top: 0,
            left: [0, 0, 40],
            right: 0,
            maxWidth: '100%'
          }
        }}
      >
        <Image
          src="/images/diamond-jubilee.png"
          alt="Hackathon Cover"
          width={380}
          sx={{
            zIndex: 1,
            animation: `${floating} cubic-bezier(.55,.03,.43,.98) 8s infinite alternate`,
            margin: '0 auto'
          }}
        />
      </Container>

      {/* <!-- Start of HubSpot Embed Code --> */}
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/8898157.js"
      ></script>
      {/* <!-- End of HubSpot Embed Code --> */}
    </Box>
  );
};

export default HeroSection;
