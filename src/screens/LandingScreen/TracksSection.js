import { Box, Container, Grid, Heading, Text, Image } from 'theme-ui';
import theme from '../../lib/theme';
// import Icon from '../../components/icon';
// import logo from '../../../public/images/maxresdefault'

const TracksSection = () => {
  return (
    <Box
      id="tracks-section"
      as="section"
      sx={{
        py: [4, 5],
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
          sx={{ my: [0, 4], textAlign: 'center' }}
        >
          Past Tracks
        </Heading>
        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          gap={[4, 2]}
          columns={[1, 2]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <div className="flip">
            <div className="front">
              <Image
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px'
                }}
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/social.png"
              />
              <Heading
                as="h1"
                sx={{
                  position: 'relative',
                  top: '-55%',
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}
              >
                SOCIAL GOOD
              </Heading>
            </div>
            <div className="back">
              <Heading sx={{ pb: [3, 3] }}>SOCIAL GOOD</Heading>
              <Text sx={{ textAlign: 'justify', textAlignLast: 'left' }}>
                Society cannot exist without incessant and necessary changes,
                and these changes are best brought about by who else other than
                budding hackers? It’s not just an interesting field to
                contribute to but also a sense of responsibility for the human
                being you are and putting your mind in something which may well
                make this society a better place to live around. This is a
                chance to showcase your skills and present your hacks revolving
                around anything that can do this society a collective good in
                one way or the other!
              </Text>
            </div>
          </div>

          <div className="flip">
            <div className="front">
              <Image
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px'
                }}
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/entertainment.jpg"
              />
              <Heading
                as="h1"
                sx={{
                  position: 'relative',
                  top: '-55%',
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  fontSize: ['1.8rem', '2rem']
                }}
              >
                FUN AND ENTERTAINMENT
              </Heading>
            </div>
            <div className="back">
              <Heading sx={{ fontSize: ['1.6rem', '2rem'], pb: [3, 3] }}>
                FUN AND ENTERTAINMENT
              </Heading>
              <Text sx={{ textAlign: 'justify', textAlignLast: 'left' }}>
                This track covers the fun and entertainment side of your
                creativity and lets you dive into a world of immense
                opportunities of traversing your favourite stuff while adding
                some innovative touch to it. The fun and entertainment category
                desires you to present your hacks which may well be used for
                making your head light, or a tweak of excitement in a wearisome
                period, or just something ‘funny and entertaining” to people
                around!
              </Text>
            </div>
          </div>

          <div className="flip">
            <div className="front">
              <Image
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px'
                }}
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/oldhacks.jpg"
              />
              <Heading
                as="h1"
                sx={{
                  position: 'relative',
                  top: '-55%',
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}
              >
                OLD HACKS
              </Heading>
            </div>
            <div className="back">
              <Heading sx={{ pb: [3, 3] }}>OLD HACKS</Heading>
              <Text sx={{ textAlign: 'justify', textAlignLast: 'left' }}>
                One always has something lying behind and beneath that one wants
                to bring into spotlight and let the world know of their
                capabilities. This segment is for bringing out the gem of your
                projects out of the inventory that you’ve already worked upon in
                the past, and put some light to it. It can revolve around
                anything, and would be great to showcase your development as
                sprouting hacker!
              </Text>
            </div>
          </div>

          <div className="flip">
            <div className="front">
              <Image
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '10px'
                }}
                src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/innovation.jpg"
              />
              <Heading
                as="h1"
                sx={{
                  position: 'relative',
                  top: '-55%',
                  color: '#fff',
                  whiteSpace: 'nowrap'
                }}
              >
                OPEN INNOVATION
              </Heading>
            </div>
            <div className="back">
              <Heading sx={{ pb: [3, 3] }}>OPEN INNOVATION</Heading>
              <Text sx={{ textAlign: 'justify', textAlignLast: 'left' }}>
                The ‘Make anything’ category of our event, this asks for the
                hacks which advance a whole new idea out from the grassroots
                level. The hacks need to be offering some ingenious ideas over
                any field they are directed towards, and will bring the best out
                of one’s hacking artistry. As we know, everyone wants this world
                to be a more convenient and easier place to live in, and your
                innovations can prove to be an essential catalyst in precisely
                that!
              </Text>
            </div>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default TracksSection;
