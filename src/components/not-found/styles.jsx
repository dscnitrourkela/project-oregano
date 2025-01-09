import styled from 'styled-components';
import tw from 'twin.macro';

export const NotFoundContainer = styled.div`
  ${tw`grid place-items-center min-h-screen`}
  background: var(--Background, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.45) 100%), #200818);
`;

export const NotFoundTitle = styled.h1`
  text-align: center;
  font-size: 9rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0.27rem;
  text-transform: uppercase;
  background: var(--Primary, linear-gradient(91deg, #e84b7d 0.34%, #b02753 99.81%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${tw`font-prompt`};
`;

export const NotFoundText = styled.p`
  color: var(--Grey000, #fff);
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 1.75rem */
  letter-spacing: 0.0375rem;
  ${tw` font-satoshi max-w-2xl`};
`;

export const NotFoundSubTitle = styled.h2`
  color: var(--Grey000, #fff);
  text-align: center;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  ${tw`font-proza -mt-5`}
`;

export const NotFoundInnerContainer = styled.div`
  ${tw`flex flex-col items-center justify-center gap-5`}
`;

export const GoBack = styled.button``;
