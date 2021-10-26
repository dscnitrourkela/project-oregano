import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

// Components
import { Card, Name, Designation, Topic, Img, Timings, Time, Date, Overlay } from './styles';
// import logo from "../../../images/speaker1.png";

export default function SpeakerCard({ card }) {
  const { name, content, designation, alt, img, time, date } = card;

  return (
    <div style={{ display: 'block' }}>
      <Card>
        <Overlay>
          <Name>{name}</Name>
          <Designation>{designation}</Designation>
          <Topic>{content}</Topic>
        </Overlay>
        <Img src={img.src} alt={alt} width={img.width} height={img.height} />
      </Card>
      <Timings>
        <Time>
          <FontAwesomeIcon icon={faClock} style={{ marginRight: '6px' }} />
          {time}
        </Time>
        <Date>
          <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '6px' }} />
          {date}
        </Date>
      </Timings>
    </div>
  );
}
