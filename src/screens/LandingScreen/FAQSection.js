import { Box, Container, Grid, Heading, Image } from 'theme-ui';
import theme from '../../lib/theme';
import Feature from '../../components/feature';
import Accordion from '../../components/accordion';

let data = [
  {
    title: 'What is a Hackathon? How different is Online Hackathon?',
    content: `A hackathon is a coding marathon where you build something with tech by working with people. It isn’t about hacking into a system, it is about building something together, It is about learning a great deal and creating something exciting in the process. Online Hackathons are held remotely unlike a traditional in-person, rest all are the same for both.`
  },
  {
    title: 'How to register?',
    content: `Scroll up to the beginning of this page and find the "Apply with Devfolio" button. Alternatively head over to hacknitr2.devfolio.co. You can register for HackNITR 3.0 all the way till March 18, 2021`
  },
  {
    title: 'Who can participate?',
    content: `Everyone is welcome to apply, any student developer, designer, working professionals or creative individuals, who are passionate about creating to join. If you can innovate or just want to have a fun weekend, you are eligible.`
  },
  {
    title: 'What if I haven’t been to a Hackathon before?',
    content: `Don’t be intimidated, we're so glad to host the first ever hackathon you’re attending, while it’s helpful to have some programming or technical experience, but it’s not a requirement. We’ll have talks, mentors and workshops to help you with your project.`
  },
  {
    title: "What if I don't have a team or idea?",
    content: `Interest in learning and working with technology is much more important. We'll have a team formation and ideation events geared towards helping you find people to work with. Just apply with Devfolio.`
  },
  {
    title: 'Where can I find updates?',
    content: `Follow us on instagram.com/hacknitr for all the updates, along with we will be reaching out to you via mail. To receive the updates through mail, kindly register for the hackathon.`
  },
  {
    title: 'What could be the size of a team?',
    content: `A Team can have minimum of 2 members to a maximum of 4 members.`
  }
];

const FAQSection = () => {
  return (
    <Box
      id="faq-section"
      as="section"
      sx={{
        py: [4, 4, 5],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.darker,
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container
        sx={{
          // maxWidth: [null, 'copyUltra'],
          svg: { filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.125))' }
        }}
      >
        <Box as="header" sx={{ textAlign: ['center'], pb: [4, 5] }}>
          <Heading as="h2" variant="title">
            FAQ
          </Heading>
        </Box>
        <Grid
          columns={[null, 2]}
          gap={[4, 6]}
          sx={{ alignItems: 'center', span: { color: 'white' } }}
        >
          <Image
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/image2.svg"
            alt="FAQ Image"
            // width={512}
          />
          <Accordion data={data} />
        </Grid>
        <Feature
          icon="welcome"
          color="rgb(255,88,88)"
          name="Have more question?"
          desc={
            <>
              Feel free to reach out to us at{' '}
              <a href="mailto:organiser@hacknitr.tech">
                organiser@hacknitr.tech
              </a>
            </>
          }
          as="aside"
          sx={{
            display: 'grid',
            gridGap: [0, 4],
            gridTemplateColumns: [null, 'auto 1fr'],
            alignItems: 'start',
            justifyContent: 'start',
            bg: 'rgba(255,88,88,0.125)',
            mt: [4, 5],
            p: [3, 4],
            borderRadius: 'extra',
            span: { transform: 'none', width: 'min-intrinsic' },
            svg: { color: 'white' }
          }}
        />
      </Container>
    </Box>
  );
};

export default FAQSection;
