import React, { useState } from 'react';
import { Body1, Body2, Button, SectionLayout } from '../shared';
import { Container, Wrapper, EventContainer } from './style';
import formatContent from '../../../config/content/Format';

const Event = ({ title, description, id, column, row, setModal, setModalContent, modal }) => {
  const handleClick = () => {
    setModalContent({
      title,
      description,
      id,
    });

    setModal(true);
  };

  return (
    <EventContainer style={{ gridColumn: `${column}`, gridRow: `${row}` }}>
      <Body2 style={{ fontWeight: '590' }}>{title}</Body2>
      <div className='event-description'>
        <div className='event-number'>{`#${id}`}</div>
        <Body1>{description}</Body1>
      </div>
      <Button text={formatContent.button} method={handleClick} />
    </EventContainer>
  );
};

const Format = () => {
  const { id, title, content, eventList } = formatContent;
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <>
      <Container>
        <SectionLayout id={id} title={title} description={content}>
          <Wrapper>
            {eventList.map(({ eventTitle, description, eventNumber, column, row }) => (
              <Event
                key={id}
                title={eventTitle}
                description={description}
                id={eventNumber}
                column={column}
                row={row}
                setModalContent={setModalContent}
                setModal={setModal}
              />
            ))}
          </Wrapper>
        </SectionLayout>
      </Container>

      {modal && <div />}
    </>
  );
};

export default Format;
