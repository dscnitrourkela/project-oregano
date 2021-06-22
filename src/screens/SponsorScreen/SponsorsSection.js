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
        // width: '100vw',
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
            2.0 Sponsors
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
              Gold Sponsors
            </Text>
          </Heading>
          <Grid columns={[1, 3]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://aws.amazon.com/developer/community/usergroups/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="/images/aws.png"
                alt="AWS User Group India logo"
                sx={{
                  maxHeight: '10rem'
                }}
              />
            </Link>

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

          <Grid columns={[1, 1]} gap={6} sx={{ alignItems: 'center', mt: 6 }}>
            <Link
              href="https://www.sashido.io/en/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/sashido.png"
                alt="Sashido logo"
                sx={{
                  maxHeight: '5rem'
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
              Silver Sponsors
            </Text>
          </Heading>
          <Grid columns={[1, 3]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://www.codechef.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/codechef.png"
                alt="CodeChef Logo"
                sx={{
                  maxHeight: '4rem'
                }}
              />
            </Link>

            <Link
              href="https://matic.network/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past4.png"
                alt="Matic Logo"
                sx={{ justifySelf: 'center' }}
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
          </Grid>

          <Grid
            columns={[1, 2]}
            gap={[6, 3]}
            sx={{ alignItems: 'center', mt: [6, 5] }}
          >
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

            <Link
              href="https://www.wolfram.com/language/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/wolfram.png"
                alt="Wolfram Logo"
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
              Bronze Sponsors
            </Text>
          </Heading>
          <Grid columns={[1, 3]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://thecodex.me/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/codex.png"
                alt="Codex Logo"
                sx={{
                  maxHeight: '15rem'
                }}
              />
            </Link>

            <Link
              href="https://www.echoar.xyz/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/echoar.png"
                alt="EchoAR Logo"
                sx={{
                  maxHeight: '15rem'
                }}
              />
            </Link>

            <Link
              href="https://egghead.io/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/egghead.png"
                alt="Egghead Logo"
                sx={{
                  maxHeight: '15rem'
                }}
              />
            </Link>
            <Link
              href="https://get.interviewready.io/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/interviewready2.png"
                alt="InterviewReady Logo"
                sx={{
                  maxHeight: '10rem'
                }}
              />
            </Link>

            <Link
              href="https://www.invisionapp.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/invision.png"
                alt="Invision Logo"
                sx={{
                  maxHeight: '15rem'
                }}
              />
            </Link>

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
                  maxHeight: '20rem'
                }}
              />
            </Link>
          </Grid>

          <Grid columns={[1, 2]} gap={6} sx={{ alignItems: 'center', mt: 6 }}>
            <Link
              href="https://www.taskade.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/taskade.png"
                alt="Taskade Logo"
                sx={{
                  maxHeight: '6rem'
                }}
              />
            </Link>

            <Link
              href="https://www.voiceflow.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/Voiceflow.png"
                alt="Voiceflow Logo"
                sx={{
                  maxHeight: '5rem'
                }}
              />
            </Link>
          </Grid>
        </Container>

        <Container sx={{ mt: [5, 6], mb: [2, 5] }}>
          <Heading
            as="h4"
            variant="title"
            sx={{ textAlign: 'center', marginBottom: '1rem' }}
            style={{
              backgroundImage:
                'linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)',
              backgroundColor: '#ef5734',
              width: 'fit-content',
              margin: '0 auto',
              padding: '0 1rem',
              paddingBottom: '5px',
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
                fontSize: ['40px', '50px']
              }}
            >
              Special Mention
            </Text>
          </Heading>
          <Grid columns={[1, 1]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://www.tweetbeam.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/tweetbeam.png"
                alt="Tweetbeam logo"
                sx={{
                  maxHeight: '10rem'
                }}
              />
            </Link>
          </Grid>
        </Container>

        <Container sx={{ mt: [5, 6], mb: [2, 5] }}>
          <Heading
            as="h4"
            variant="title"
            sx={{ textAlign: 'center', marginBottom: '1rem' }}
            style={{
              backgroundImage:
                'linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%)',
              backgroundColor: '#ef5734',
              width: 'fit-content',
              margin: '0 auto',
              padding: '0 1rem',
              paddingBottom: '5px',
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
                fontSize: ['25px', '50px']
              }}
            >
              Media and Outreach Partner
            </Text>
          </Heading>
          <Grid columns={[1, 1]} gap={6} sx={{ alignItems: 'center', mt: 4 }}>
            <Link
              href="https://www.noticebard.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/noticebard.png"
                alt="Noticebard logo"
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
