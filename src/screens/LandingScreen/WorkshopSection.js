import { Box, Container, Grid, Heading } from 'theme-ui';
import theme from '../../lib/theme';
import Workshop from '../../components/workshop';

const WorkshopSection = () => {
  return (
    <Box
      id="themes-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        backgroundColor: theme.colors.dark,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ my: [0, 4], textAlign: 'center' }}
        >
          Past Workshops
        </Heading>

        <Grid
          columns={[1, 2]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 6],
            mt: [4, 5]
          }}
        >
          <Workshop
            src="/images/Workshops/sanket.png"
            title="Headstart to Competitive Programming"
            name="Sanket Singh"
            designation="Software Development Engineer, LinkedIn"
            description="Experience the programming world through a hands-on workshop with CodeChef."
            href1="https://www.instagram.com/sanket.singh__/"
            icon1="instagram"
            title1="Sanket on Instagram"
            href2="https://github.com/singhsanket143"
            icon2="github"
            title2="Sanket on GitHub"
            href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=Codechef%20Workshop%20X%20HackNITR%202.0&dates=20210316T200000/20210316T210000&details=This%20is%20the%20reminder%20for%20the%20Codechef%20Workshop%20session%20on%20-%20%22%20Headstart%20to%20Competitive%20Programming%20by%20Sanket%20Singh%20%22.%20%0AHackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A%2F%2Fhacknitr.tech%2Flive"
          />

          <Workshop
            src="/images/Workshops/sumanresize.png"
            title="AWS For Developers             "
            name="Suman Debnath"
            designation="Principal Developer Advocate at Amazon Web Services based in India"
            description="An introductory workshop on the Amazon Web Services platform for developers by the Principal developer advocate of Amazon Web Services based in India."
            href1="https://twitter.com/_sumand"
            icon1="twitter"
            title1="Suman on Twitter"
            href2="https://github.com/debnsuma"
            icon2="github"
            title2="Suman on GitHub"
            href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=AWS%20Workshop%20X%20HackNITR%202.0&dates=20210318T180000/20210318T200000&details=This%20is%20the%20reminder%20for%20the%20Suman%20Debnath%27s%20Workshop%20session%20on%20-%20%22%20AWS%20for%20Developers%20%22.%20%0AHackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A%2F%2Fhacknitr.tech%2Flive"
          />
        </Grid>

        {/* <Grid
          columns={[1, 1]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 6],
            mt: [4, 5]
          }}
        >
          <Workshop
            src="/images/Workshops/sumanresize.png"
            title="AWS For Developers             "
            name="Suman Debnath"
            designation="Principal Developer Advocate at Amazon Web Services based in India"
            description="An introductory workshop on the Amazon Web Services platform for developers by the Principal developer advocate of Amazon Web Services based in India."
            href1="https://twitter.com/_sumand"
            icon1="twitter"
            title1="Suman on Twitter"
            href2="https://github.com/debnsuma"
            icon2="github"
            title2="Suman on GitHub"
            href="https://calendar.google.com/calendar/u/0/r/eventedit?uid=5f4212d7db36e40015f240cf&location=http://hacknitr.tech/live&ctz=Asia/Calcutta&text=AWS%20Workshop%20X%20HackNITR%202.0&dates=20210318T180000/20210318T200000&details=This%20is%20the%20reminder%20for%20the%20Suman%20Debnath%27s%20Workshop%20session%20on%20-%20%22%20AWS%20for%20Developers%20%22.%20%0AHackNITR%202.0%20will%20be%20conducted%20entirely%20on%20Airmeet%20and%20the%20join%20link%20will%20be%20active%2006%20hrs%20before%20the%20event.%0A%0AJoin%20Link%3A%20http%3A%2F%2Fhacknitr.tech%2Flive"
          />
        </Grid> */}
      </Container>
    </Box>
  );
};

export default WorkshopSection;
