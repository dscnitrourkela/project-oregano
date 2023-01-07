/* eslint-disable max-len */
import React, { useState } from 'react';
import { Body1, Body2, Button, Heading4, SectionLayout } from '../shared';
import { Container, Wrapper, EventContainer, RegisterContainer } from './style';
import formatContent from '../../../config/content/Format';
import Modal from './Modal';

const Event = ({
  title,
  description,
  id,
  column,
  row,
  setModal,
  setModalContent,
  className,
  mode,
  content,
  guidelines,
}) => {
  const handleClick = () => {
    setModalContent({
      title,
      description,
      mode,
      content,
      id,
      guidelines,
    });

    setModal(true);
  };

  return (
    <EventContainer style={{ gridColumn: `${column}`, gridRow: `${row}` }} className={className}>
      <Body1 style={{ fontWeight: '590', paddingBottom: '4px' }}>{title}</Body1>
      <div className='event-description'>
        <div className='event-number'>{`#${id}`}</div>
        <Body1>{description}</Body1>
      </div>
      <Button text={formatContent.button} method={handleClick} border />
    </EventContainer>
  );
};

const DaysLeft = ({ content }) => {
  const { description, column, row, link } = content;
  const today = new Date().getTime();
  const lastDay = new Date('2023-01-07 00:00').getTime();
  const numberOfHours = Math.round((lastDay - today) / (1000 * 60 * 60));

  return (
    <RegisterContainer style={{ gridColumn: `${column}`, gridRow: `${row}` }}>
      <div className='title'>
        <img
          src='https://res.cloudinary.com/dujqfyato/image/upload/v1673027911/HackNITR/Frame_78_eqq6fw_anu8tx.svg'
          alt='Logo'
        />
        <Heading4 semibold>
          {numberOfHours > 0 ? `${numberOfHours} Hours Left` : 'Registration is Over'}
        </Heading4>
      </div>
      <Button small filled text='REGISTER NOW' link={link} />
      <Body2>{description}</Body2>
    </RegisterContainer>
  );
};

const Format = () => {
  const { id, title, content, eventList, registerNow } = formatContent;
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <>
      <Container>
        <SectionLayout id={id} title={title} description={content}>
          <Wrapper>
            <DaysLeft content={registerNow} />
            {eventList.map(
              ({
                eventTitle,
                description,
                eventNumber,
                column,
                row,
                className,
                mode,
                eventcontent,
                guidelines,
              }) => (
                <Event
                  key={id}
                  title={eventTitle}
                  description={description}
                  id={eventNumber}
                  column={column}
                  row={row}
                  setModalContent={setModalContent}
                  setModal={setModal}
                  className={className}
                  mode={mode}
                  content={eventcontent}
                  guidelines={guidelines}
                />
              ),
            )}
          </Wrapper>
        </SectionLayout>
      </Container>

      {modal && (
        <Modal
          isOpen={modal}
          close={() => {
            setModal(false);
          }}
        >
          <Heading4 style={{ fontWeight: '590', paddingBottom: '20px' }}>
            {modalContent.description}
          </Heading4>
          <ol
            className='modal-body'
            style={{
              color: '#fff',
              paddingBottom: '20px',
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
            }}
          >
            <li>Mode: {modalContent.mode}</li>
            <li>Date: {modalContent.title}</li>
            <Body1>{modalContent.content}</Body1>
            <li>
              Links:{' '}
              <a style={{ color: 'blue' }} href={modalContent.guidelines}>
                Submission Guidelines
              </a>
            </li>
          </ol>
        </Modal>
      )}
    </>
  );
};

export default Format;
