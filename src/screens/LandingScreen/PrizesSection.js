import { Box, Container, Grid, Heading, Image, Text, Card } from 'theme-ui';
import theme from '../../lib/theme';

import CategoryPrize from '../../components/category-prize';
import SponsoredPrize from '../../components/sponsored-prize';

const PrizesSection = () => {
  return (
    <Box
      id="prizes-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.dark,
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
          sx={{ textAlign: 'center', mt: [1, 2], mb: [1, 4] }}
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
            Past Prizes
          </Text>
        </Heading>

        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          pl={[1, 3]}
          pr={[1, 3]}
          gap={[4, 3, 4]}
          columns={[1, 2]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <SponsoredPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/first.png"
            name="Overall Winner get prizes worth $2400"
          />

          <SponsoredPrize
            src="/images/women.svg"
            name="All women team get prizes worth $2200"
          />
        </Grid>

        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          pl={[1, 3]}
          pr={[1, 3]}
          gap={[4, 3, 4]}
          columns={[1, 2, 4]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <CategoryPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/social.png"
            heading="Social Good"
            description="Winner in this track gets prizes worth $1600"
          />
          <CategoryPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/entertainment.jpg"
            heading="Fun & Entertainment"
            description="Winner in this track gets prizes worth $1600"
          />
          <CategoryPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/oldhacks.jpg"
            heading="Old Hacks"
            description="Winner in this track gets prizes worth $1600"
          />
          <CategoryPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/innovation.jpg"
            heading="Open Innovation"
            description="Winner in this track gets prizes worth $1600"
          />
        </Grid>

        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          pl={[1, 3]}
          pr={[1, 3]}
          gap={[4, 3, 4]}
          columns={[1, 2]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <SponsoredPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/past4.png"
            name="Best hack built with Matic"
            amount="Rs. 15,000"
          />

          <SponsoredPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/tezos.png"
            name="Best hack built with Tezos"
            amount="Rs. 20,000"
          />

          <SponsoredPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/portis.png"
            name="Best hack built with Portis"
            amount="Rs. 15,000"
          />

          <SponsoredPrize
            src="/images/echoar.png"
            name="Best hack built with EchoAR"
            amount="$1118"
          />

          <SponsoredPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/sashido.png"
            name="Best hack built with ML and SashiDo"
            description="3 special prizes to top three winners"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default PrizesSection;
