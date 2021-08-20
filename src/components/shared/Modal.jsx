import React from 'react';

// Libraries
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import { Body, Heading4 } from '.';

const Container = styled.div`
  ${tw`
    h-screen
    fixed
    left-0
    top-0
    flex
    justify-center
    items-center
    inset-0 z-50
    outline-none
    focus:outline-none
    bg-no-repeat
    bg-center
    bg-cover
  `}
  min-width: 100vw;
`;

const scaleUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const scaleDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const BackgroundContainer = styled.div`
  ${tw`
      absolute
      bg-black
      opacity-80
      inset-0
      z-0
    `};

  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;

const BodyContainer = styled.div`
  ${tw`
    text-left
    p-5
    flex-auto
    justify-center
  `}

  animation: ${(isOpen) => (isOpen ? scaleDown : scaleUp)} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)
    forwards;
`;

const ContentContainer = styled.div`
  ${tw`
    w-full
    max-w-lg
    p-5
    relative
    mx-auto
    my-auto
    rounded-xl
    shadow-lg
    bg-background-dark

    flex
    justify-between
  `}
`;

const SvgContainer = styled.div`
  ${tw`
    h-full
    mr-5
  `}
`;

const Svg = styled.svg`
  ${tw`
    w-16
    h-16
    rounded-2xl
    p-3
    border
    border-gray-800
    text-blue-400
    bg-background-darker
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  ${tw`
    absolute
    top-5
    right-5
    m-0
    text-white
  `}

  &:hover {
    cursor: pointer;
  }
`;

const FooterContainer = styled.div`
  ${tw`
    p-3
    pb-0
    pr-0
    mt-5
    text-right
    space-x-4
    md:block
  `}
`;

const Body2 = styled(Body)`
  ${tw`
    text-color-primary
  `}
`;

const DeleteButton = styled.button`
  ${tw`
    mb-0
    md:mb-0
    px-5
    py-2

    shadow-sm
    font-medium
    tracking-wider
    border
    rounded-full

    bg-blue-400
    border-blue-400
    text-white
    hover:bg-blue-400
    hover:shadow-lg
  `}

  &:hover {
    cursor: pointer;
  }
`;

const Modal = ({ isOpen, close, onProceed, buttonText, children }) => {
  const proceed = () => {
    onProceed();
    close();
  };

  return (
    <>
      {isOpen && (
        <Container id='modal-id'>
          <BackgroundContainer onClick={close} isOpen={isOpen} />

          <BodyContainer>
            {/* <!--content--> */}
            <ContentContainer>
              {/* <!--body--> */}
              <SvgContainer>
                <Svg
                  xmlns='http://www.w3.org/2000/svg'
                  class=''
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </Svg>
              </SvgContainer>

              <Icon icon={faTimes} onClick={close} />

              <div>
                {children || (
                  <>
                    <Heading4>Are you sure?</Heading4>
                    <Body style={{ marginTop: '5px' }}>
                      Do you really want to delete your account? This process cannot be undone
                    </Body>
                  </>
                )}

                <FooterContainer>
                  <DeleteButton onClick={proceed}>
                    <Body2>{buttonText || 'Proceed'}</Body2>
                  </DeleteButton>
                </FooterContainer>
              </div>
            </ContentContainer>
          </BodyContainer>
        </Container>
      )}
    </>
  );
};

export default Modal;
