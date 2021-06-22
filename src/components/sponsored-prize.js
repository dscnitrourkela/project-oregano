import { Box, Heading, Image, Card, Text } from 'theme-ui';
import theme from '../lib/theme';

const SponsoredPrize = (props) => {
  const { src, name, amount, description } = props;

  return (
    <Card
      variant="interactive"
      sx={{
        backgroundColor: theme.colors.darkless,
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        padding: 0,
        margin: '0 auto',
        width: '97%'
      }}
    >
      <div>
        <Image
          src={src}
          style={{ objectFit: 'contain', height: '250px', width: '100%', paddingTop: '5px' }}
        />
      </div>
      <div style={{ padding: '1rem', backgroundColor: '#1F2D3D' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Heading as="h3" sx={{textAlign: 'left'}}>{name}</Heading>
          <Heading as="h3">
            <Text>{amount}</Text>
          </Heading>
        </Box>
        <Text as="p" sx={{ color: '#8492A6', textAlign: 'justify' }}>
          {description}
        </Text>
      </div>
    </Card>
  );
};

export default SponsoredPrize;
