import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';
import TypeformEmbed from './TypeformEmbed';

const InductionScreen = ({ code }) => {
  return (
    <Box
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        // minWidth: '100vw',
        height: 'fit-content',
        pt: [5, 6],
        pb: [5, 6],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: theme.colors.darker
      }}
    >
      <div>
        <TypeformEmbed code={code} />
      </div>
    </Box>
  );
};

export default InductionScreen;
