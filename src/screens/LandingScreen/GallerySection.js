import { Box, Container, Heading } from 'theme-ui';
import theme from '../../lib/theme';

const FAQSection = () => {
  return (
    <Box
      id="faq-section"
      as="section"
      sx={{
        py: [4, 4, 5],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.dark,
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
            Gallery
          </Heading>
        </Box>

        <Container
          sx={{
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <iframe
            className="twitter-wall"
            src="https://www.tweetbeam.com/show?id=mAx1I"
          ></iframe>
        </Container>
      </Container>
    </Box>
  );
};

export default FAQSection;
