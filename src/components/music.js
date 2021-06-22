import ReactAudioPlayer from 'react-audio-player';
import { Box } from 'theme-ui';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Music = ({ muted, handleMute }) => {
  return (
    <>
      <div
        onClick={handleMute}
        style={{
          width: '1rem'
        }}
      >
        {muted ? (
          <FontAwesomeIcon icon={faVolumeMute} />
        ) : (
          <FontAwesomeIcon icon={faVolumeUp} />
        )}
      </div>
      <Box sx={{ display: 'none' }}>
        <ReactAudioPlayer
          src="https://github.com/dscnitrourkela/project-kiwi/blob/dev/public/music/score.mp3?raw=true"
          controls
          // autoPlay
          muted={muted}
        />
      </Box>
    </>
  );
};

export default Music;
