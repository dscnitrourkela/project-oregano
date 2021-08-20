/* eslint-disable max-len */
import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { ButtonLight, Heading4, Body, Modal } from '.';

// Assets
import config from '../../../config/website';

const Label = styled.label`
  ${tw`
  flex justify-start items-start
  mb-3
  `}
`;

const InputContainer = styled.div`
  ${tw`
    bg-gray-400
    border-2
    rounded
    border-gray-400
    w-5 h-5
    flex
    flex-shrink-0
    justify-center
    items-center
    mr-3
    mt-1
    focus-within:border-blue-500
  `}
`;

const Input = styled.input`
  ${tw`
    opacity-0 absolute
  `}
`;

const Checkbox = ({ value, setValue, content }) => (
  <Label>
    <InputContainer>
      <Input type='checkbox' checked={value} onChange={() => setValue((current) => !current)} />
      {value && (
        <svg
          className='fill-current hidden w-3 h-3 pointer-events-none'
          viewBox='0 0 20 20'
          style={{ padding: '3px' }}
        >
          <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
        </svg>
      )}
    </InputContainer>
    <Body className='select-none'>{content}</Body>
  </Label>
);

const RegisterButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

  const onProceed = () => {
    if (window) {
      window.open(config.register, '_blank', 'noreferrer');
    }
  };

  return (
    <>
      <ButtonLight onClick={() => setModalOpen(true)}>Register Now!</ButtonLight>

      <Modal isOpen={modalOpen} close={() => setModalOpen(false)} onProceed={onProceed}>
        <Heading4>Checkboxes</Heading4>
        <Body style={{ marginBottom: '15px' }}>Please check the following checkboxes.</Body>

        <Checkbox
          value={value1}
          setValue={setValue1}
          content='I have read and agree to the MLH Code of Conduct.'
        />

        <Checkbox
          value={value2}
          setValue={setValue2}
          content='I authorize you to share my application/registration information with Major League
            Hacking for event administration, ranking, and MLH administration in-line with the MLH
            Privacy Policy. I further agree to the terms of both the MLH Contest Terms and
            Conditions and the MLH Privacy Policy.'
        />

        <Checkbox
          value={value3}
          setValue={setValue3}
          content='I authorize MLH to send me pre- and post-event informational emails, which contain free credit and opportunities from their partners.'
        />
      </Modal>
    </>
  );
};

export default RegisterButton;
