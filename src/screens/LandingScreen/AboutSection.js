import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const AboutSection = () => {
  return (
    <Box
      id="about-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '70vh',
        // width: '100vw',
        height: 'fit-content',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <Container>
        <Text as="p" variant="eyebrow" sx={{ textAlign: ['center', 'center'] }}>
          HackNITR 3.0
        </Text>
        <Heading
          as="h2"
          variant="title"
          sx={{
            lineHeight: 1.25,
            letterSpacing: '1px',
            textAlign: ['center', 'center']
          }}
        >
          Flagship hackathon of{' '}
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [0, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            NIT Rourkela
          </Text>
        </Heading>
        <Grid
          // columns={[null, '1fr 2fr']}
          mt={[3, 5]}
          sx={{ maxWidth: 'copyUltra', mx: 'auto' }}
        >
          <Text as="p" variant="lead" sx={{ mt: 0, textAlign: 'center' }}>
            HackNITR 3.0 is one of a kind hackathon brought to you by{' '}
            <Link rel="noreferrer" sx={{ cursor: 'pointer' }}>
              <a
                href="https://opencodenitr.herokuapp.com/"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                OpenCode
              </a>
            </Link>{' '}
            and{' '}
            <Link rel="noreferrer" sx={{ cursor: 'pointer' }}>
              <a
                href="https://dscnitrourkela.org/"
                target="_blank"
                style={{ textDecoration: 'none' }}
              >
                DSC NIT Rourkela
              </a>
            </Link>
            . A unique opportunity to bring out your ideas and technological
            skills to win awesome prizes and swags.
          </Text>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
