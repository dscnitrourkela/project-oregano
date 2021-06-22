import { Box, Heading, Image, Card } from 'theme-ui';
import theme from '../lib/theme';

const categoryPrize = (props) => {
 const {src, heading, description} = props;

 return (
  <Card
    variant="interactive"
    sx={{
      backgroundColor: theme.colors.darkless,
      display: 'flex',
      flexDirection: 'column',
      color: '#fff',
      padding: 0,
      margin: 0,
    }}
  >
    <div style={{padding: '1rem'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Heading as="h4">{heading}</Heading>
      </Box>
    </div>
    <div>
      <Image
        src={src}
        style={{ objectFit: 'cover', height: '250px', width: '100%' }}
      />
    </div>
    <div style={{padding: '1rem'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Heading as="h3" sx={{textAlign: 'center'}}>{description}</Heading>
      </Box>
    </div>
  </Card>
 )
}

export default categoryPrize;