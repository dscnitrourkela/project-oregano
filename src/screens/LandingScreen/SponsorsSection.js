import { Box, Container, Grid, Heading, Image, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const SponsorsSection = () => {
  return (
    <Box
      id="sponsors-section"
      as="section"
      sx={{
        py: [6, 6],
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        backgroundColor: theme.colors.darker,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            Sponsors
          </Text>
        </Heading>

        <Container sx={{ mt: [5, 6], mb: [2, 5] }}>
          <Heading
            as="h4"
            variant="title"
            sx={{ textAlign: 'center', marginBottom: '1rem' }}
            style={{
              background:
                'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
              // background: '#FCC201',
              width: 'fit-content',
              margin: '0 auto',
              padding: '0.5rem 1rem',
              borderRadius: '10px'
            }}
          >
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 1,
                mx: [-2, 0],
                whiteSpace: 'nowrap',
                color: '#5d114c',
                fontSize: ['2.6rem', '3rem']
              }}
            >
              Alpha Sponsors
            </Text>
          </Heading>
          <Grid columns={[1, 2]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://devfolio.co/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past.png"
                alt="Devfolio logo"
                sx={{
                  maxHeight: '5rem'
                }}
              />
            </Link>
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/github1.png"
                alt="GitHub logo"
                sx={{
                  maxHeight: '7rem'
                }}
              />
            </Link>
          </Grid>
        </Container>

        <Container sx={{ mt: [6, 6] }}>
          <Heading
            as="h4"
            variant="title"
            sx={{ textAlign: 'center', marginBottom: '1rem' }}
            style={{
              background:
                'linear-gradient(-72deg,#dedede,#ffffff 16%,#dedede 21%,#ffffff 24%,#454545 27%,#dedede 36%,#ffffff 45%,#ffffff 60%,#dedede 72%,#ffffff 80%,#dedede 84%,#a1a1a1)',
              width: 'fit-content',
              margin: '0 auto',
              padding: '0.5rem 1rem',
              borderRadius: '10px'
            }}
          >
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 1,
                mx: [-2, 0],
                whiteSpace: 'nowrap',
                color: '#5d114c',
                fontSize: ['2.6rem', '3rem']
              }}
            >
              Beta Sponsors
            </Text>
          </Heading>
          <Grid columns={[1, 3]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://polygon.technology/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="images/polygon.png"
                alt="Polygon Logo"
                sx={{
                  maxHeight: '20rem'
                }}
              />
            </Link>

            <Link
              href="https://www.portis.io/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/portis.png"
                alt="Portis Logo"
                sx={{
                  maxHeight: '20rem'
                }}
              />
            </Link>

            <Link
              href="https://celo.org/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="images/celo.png"
                alt="Celo Logo"
                sx={{ justifySelf: 'center', maxHeight: '20rem' }}
              />
            </Link>
          </Grid>

          <Grid columns={[1, 1]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://tezos.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/tezos.png"
                alt="Tezos Logo"
                sx={{
                  maxHeight: '6rem'
                }}
              />
            </Link>
          </Grid>
        </Container>

        <Container sx={{ mt: [6, 6] }}>
          <Heading
            as="h4"
            variant="title"
            sx={{ textAlign: 'center', marginBottom: '1rem' }}
            style={{
              background:
                'linear-gradient(-72deg,#ca7345,#ffdeca 16%,#ca7345 21%,#ffdeca 24%,#a14521 27%,#ca7345 36%,#ffdeca 45%,#ffdeca 60%,#ca7345 72%,#ffdeca 80%,#ca7345 84%,#732100)',
              width: 'fit-content',
              margin: '0 auto',
              padding: '0.5rem 1rem',
              borderRadius: '10px'
            }}
          >
            <Text
              as="span"
              sx={{
                borderRadius: 'default',
                px: 1,
                mx: [-2, 0],
                whiteSpace: 'nowrap',
                color: '#5d114c',
                fontSize: ['2.6rem', '3rem']
              }}
            >
              Delta Sponsors
            </Text>
          </Heading>

          <Grid columns={[1]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://www.stickermule.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/stickermule.png"
                alt="Sticker Mule Logo"
                sx={{
                  maxHeight: '10rem'
                }}
              />
            </Link>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default SponsorsSection;
