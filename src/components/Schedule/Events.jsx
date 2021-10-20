import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import './customstyling.css';
import Modal from 'react-responsive-modal';

import schedule from '../../../config/content/Schedule';
import { ScheduleContainer, Box, Title, Title2, Text } from './Styles';

const ModalComponent = ({ linkGoogle, linkics, open, onCloseModal }) => (
  <Modal
    open={open}
    onClose={onCloseModal}
    center
    classNames={{
      overlay: 'customOverlay',
      modal: 'customModal',
    }}
  >
    <h1 style={{ fontFamily: 'Roboto' }}>Add To</h1>
    <div className='buttonContainer'>
      <button type='button' onClick={() => window.open(linkGoogle, '_blank')} className='button'>
        Google Calender
      </button>
      <a style={{ textDecoration: 'none', textAlign: 'center' }} href={linkics} className='button'>
        iCalendar
      </a>
    </div>
  </Modal>
);

export const Events = () => {
  const [open, setOpen] = useState(false);
  const days = ['day1', 'day2', 'day3', 'day4'];

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      {days.map((key) => (
        <ScheduleContainer key={key}>
          {schedule[key].map(({ id, head, subhead, color, linkGoogle, linkics }) => (
            <React.Fragment key={id}>
              {head ? (
                <Box key={id} color={color} onClick={onOpenModal}>
                  <Text>
                    <Title>{head}</Title>
                    <Title2>{subhead}</Title2>
                  </Text>
                </Box>
              ) : (
                <div />
              )}

              <ModalComponent
                open={open}
                onCloseModal={onCloseModal}
                linkGoogle={linkGoogle}
                linkics={linkics}
              />
            </React.Fragment>
          ))}
        </ScheduleContainer>
      ))}
    </>
  );
};
