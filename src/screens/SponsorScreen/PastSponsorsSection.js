import { Box, Container, Grid, Heading, Image, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const PastSponsorsSection = () => {
  return (
    <Box
      id="pastSponsors-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.dark,
        // width: '100vw',
        height: 'fit-content',

        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', marginTop: '4rem' }}
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
            1.0 Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[2, 4]}
          gap={[4, 4, 5]}
          sx={{
            mt: 4,
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            span: { color: 'white' }
          }}
        >
          <Link
            href="https://challengerocket.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/crocket.png"
              alt="Challenge Rocket logo"
              sx={{ maxHeight: '9rem' }}
            />
          </Link>
          <Link
            href="https://www.creative-tim.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/CT.png"
              alt="creative-tim logo"
              sx={{ maxHeight: '8rem' }}
            />
          </Link>
          <Link href="https://devfolio.co/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past.png"
              alt="Devfolio logo"
              // width={512}
            />
          </Link>
          <Link
            href="https://www.digitalocean.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg"
              alt="DigitalOcean logo"
              // width={512}
            />
          </Link>
          <Link href="https://get.tech/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/dotTECH.png"
              alt="dotTECH logo"
              sx={{
                width: '95%'
              }}
            />
          </Link>
          <Link href="https://foldapp.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past5.png"
              alt="fold logo"
              sx={{
                width: '90%'
              }}
            />
          </Link>
          <Link href="https://github.com/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/github.png"
              alt="GitHub logo"
              sx={{ maxHeight: '9rem' }}
            />
          </Link>
          <Link
            href="https://www.hackerearth.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/hackerearth.png"
              alt="Hackerearth logo"
              // width={512}
            />
          </Link>
          <Link
            href="https://www.invisionapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/invision.png"
              alt="Invision logo"
              // width={512}
            />
          </Link>
          <Link
            href="https://www.jetbrains.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past1.png"
              alt="Jetbrains logo"
              sx={{ maxHeight: '10rem' }}
            />
          </Link>
          <Link href="https://matic.network/" target="_blank" rel="noreferrer">
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past4.png"
              alt="Matic Logo"
            />
          </Link>
          <Link
            href="https://www.noticebard.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/NB.png"
              sx={{ maxHeight: '8rem' }}
              alt="Noticebard logo"
              // width={512}
            />
          </Link>
        </Grid>

        <Grid
          columns={[2, 2]}
          gap={[4, 4, 0]}
          sx={{
            mt: [4, 5],
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            span: { color: 'white' }
          }}
        >
          <Link
            href="https://unitechindia.com/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/unitech.png"
              alt="Unitech logo"
              sx={{ maxWidth: '10rem' }}
            />
          </Link>
          <Link
            href="https://www.wolfram.com/language/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/wolfram.png"
              alt="Wolfram logo"
              sx={{ maxHeight: '6rem' }}
            />
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default PastSponsorsSection;
