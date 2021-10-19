import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import './customstyling.css';
import Modal from 'react-responsive-modal';

import schedule from '../../../config/content/Schedule';
import { ScheduleContainer, Box, Title, Title2 } from './Styles';

export const Events = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <ScheduleContainer>
        {schedule.day1.map(({ id, head, subhead, color, linkGoogle, linkics }) => (
          <>
            <Box key={id} color={color} onClick={onOpenModal}>
              <Title>{head}</Title>
              <Title2>{subhead}</Title2>
            </Box>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>Open with</h1>
              <button
                type='button'
                onClick={() => window.open(linkGoogle, '_blank')}
                className='button'
              >
                Google Calender
              </button>
              <button
                type='button'
                onClick={() => window.open(linkics, '_blank')}
                className='button'
              >
                iCalendar
              </button>
            </Modal>
          </>
        ))}
      </ScheduleContainer>
      <ScheduleContainer>
        {schedule.day2.map(({ id, head, subhead, color, linkGoogle, linkics }) => (
          <>
            <Box key={id} color={color} onClick={onOpenModal}>
              <Title>{head}</Title>
              <Title2>{subhead}</Title2>
            </Box>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>Open with</h1>
              <button
                type='button'
                onClick={() => window.open(linkGoogle, '_blank')}
                className='button'
              >
                Google Calender
              </button>
              <button
                type='button'
                onClick={() => window.open(linkics, '_blank')}
                className='button'
              >
                iCalendar
              </button>
            </Modal>
          </>
        ))}
      </ScheduleContainer>
      <ScheduleContainer>
        {schedule.day3.map(({ id, head, subhead, color, linkGoogle, linkics }) => (
          <>
            <Box key={id} color={color} onClick={onOpenModal}>
              <Title>{head}</Title>
              <Title2>{subhead}</Title2>
            </Box>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>Open with</h1>
              <button
                type='button'
                onClick={() => window.open(linkGoogle, '_blank')}
                className='button'
              >
                Google Calender
              </button>
              <button
                type='button'
                onClick={() => window.open(linkics, '_blank')}
                className='button'
              >
                iCalendar
              </button>
            </Modal>
          </>
        ))}
      </ScheduleContainer>
      <ScheduleContainer>
        {schedule.day4.map(({ id, head, subhead, color, linkGoogle, linkics }) => (
          <>
            <Box key={id} color={color} onClick={onOpenModal}>
              <Title>{head}</Title>
              <Title2>{subhead}</Title2>
            </Box>
            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
              }}
            >
              <h1 style={{ textAlign: 'center' }}>Open with</h1>
              <button
                type='button'
                onClick={() => window.open(linkGoogle, '_blank')}
                className='button'
              >
                Google Calender
              </button>
              <button
                type='button'
                onClick={() => window.open(linkics, '_blank')}
                className='button'
              >
                iCalendar
              </button>
            </Modal>
          </>
        ))}
      </ScheduleContainer>
    </>
  );
};
