import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ButtonMeta from './Typography/ButtonMeta';
import ButtonMetaLarge from './Typography/ButtonMetaLarge';

const ButtonContainer = styled.button`
  background: ${(props) => (props.filled ? '#FFE91F' : 'transparent')};
  :hover {
    background: ${(props) => (props.filled ? '#FFEF5A' : 'rgba(95, 95, 95, 0.5)')};
    color: ${(props) => (props.filled ? '#000' : '#FFEF5A')};
  }
  color: ${(props) => (props.filled ? '#000' : '#FFE91F')};
  ${tw`
    rounded-5xl
    px-6
    py-[10px]
    sm:px-9
    sm:py-4
  `}/* &>p {
    text-decoration: ${(props) => (props.filled ? 'none' : 'underline')};
  } */
`;

const Arrow = styled.span`
  margin-left: 3px;
  /* text-decoration: none ; */
`;

const Button = ({ text, small, filled, arrowed, link, method = undefined }) => {
  const textFinal = (
    <>
      {arrowed ? (
        <>
          {text}
          <Arrow>{'>'}</Arrow>
        </>
      ) : (
        <>{text}</>
      )}
    </>
  );
  return (
    <ButtonContainer onClick={method} filled={filled}>
      {link ? (
        <Link to={link}>
          {small ? (
            <ButtonMeta>{textFinal}</ButtonMeta>
          ) : (
            <ButtonMetaLarge>{textFinal}</ButtonMetaLarge>
          )}
          <ButtonMeta>{text}</ButtonMeta>
        </Link>
      ) : (
        <>
          {small ? (
            <ButtonMeta>{textFinal}</ButtonMeta>
          ) : (
            <ButtonMetaLarge>{textFinal}</ButtonMetaLarge>
          )}
        </>
      )}
    </ButtonContainer>
  );
};

export default Button;
