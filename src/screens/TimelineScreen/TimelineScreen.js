import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';
import timelineData from './data.json';



const Gallery = () => {
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
        alignItems: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <div
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        className="timeline"
      >
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time(UTC+5:30)</th>
              <th>Type</th>
              <th>Host</th>
            </tr>
          </thead>
          <tbody>
            {
              timelineData.map((date,i) => {
                return date.events.map((event) => (
                    <tr>
                    <td style={{textAlign:"left"}}>{event.title}</td>
                    <td>{date.date}</td>
                    <td>{event.time}</td>
                    <td> <h6 className={event.type.trim().toLowerCase()}> {event.type} </h6> </td>
                    <td>{event.host}</td>
                  </tr>
                ))
              } )
            }
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default Gallery;
