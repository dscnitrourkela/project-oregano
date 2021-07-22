import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SponsorLogo = styled.div`
  ${tw`p-4 m-auto justify-center align-middle`}
  & >* {
    ${tw`h-24`}
  }
`;

function SponsorIcon({ pic }) {
  return (
    <SponsorLogo>
      <img src={`${pic}.png`} alt='' />
    </SponsorLogo>
  );
}

export default SponsorIcon;
