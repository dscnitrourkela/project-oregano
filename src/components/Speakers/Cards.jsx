import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

// Components
import { Card, Name, Designation, Topic, Img, Timings, Time, Date } from './styles';
import logo from "../../../images/speaker1.png";

export default function SpeakerCard({ card }) {
  const { name, content, designation, alt, img, time, date } = card;

  return (
    <div style={{ display: "block"}}>
    <Card>
      <Name>{name}</Name>
      <Designation>{designation}</Designation>
      <Topic>{content}</Topic>
      <Img src={logo} alt={alt} width={img.width} />
    </Card>
    <Timings>
      <Time>
      <FontAwesomeIcon icon={faClock} style={{ marginRight: '8px' }} />
        {time}
      </Time>
      <Date>
        <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '8px' }} />
        {date}
      </Date>
    </Timings>
    </div>
  );
}