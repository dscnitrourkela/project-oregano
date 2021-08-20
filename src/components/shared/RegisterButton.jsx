/* eslint-disable max-len */
import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

// Components
import { ButtonLight, Heading4, Body, Modal } from '.';

// Assets
import config from '../../../config/website';
import { renderData } from '../../utils/parseLinks';

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
    <Body className='select-none'>{renderData(content)}</Body>
  </Label>
);

const RegisterButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

  const onProceed = () => {
    if (!value1 || !value2 || !value3) {
      if (window) {
        // eslint-disable-next-line no-alert
        window.alert('Please accept the following terms to proceed');
        return;
      }
    }
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
          content={{
            'body-1': 'I have read and agree to the ',
            'link-1': {
              text: 'MLH Code of Conduct.',
              href: config.codeOfConduct,
            },
          }}
        />

        <Checkbox
          value={value2}
          setValue={setValue2}
          content={{
            'body-1':
              'I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the ',
            'link-1': {
              href: config.privacyPolicy,
              text: 'MLH Privacy Policy',
            },
            'body-2': '. I further agree to the terms of both the ',
            'link-2': {
              href: config.termsConditions,
              text: 'MLH Contest Terms and Conditions',
            },
            'body-3': ' and the ',
            'link-3': {
              href: config.privacyPolicy,
              text: 'MLH Privacy Policy.',
            },
          }}
        />

        <Checkbox
          value={value3}
          setValue={setValue3}
          content={{
            'body-1':
              'I authorize MLH to send me pre- and post-event informational emails, which contain free credit and opportunities from their partners.',
          }}
        />
      </Modal>
    </>
  );
};

export default RegisterButton;
