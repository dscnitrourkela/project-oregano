import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import saber1 from '../../../images/saberAlpha.svg'
import saber2 from '../../../images/saberBeta.svg'

export const Header = styled.h1`
  font-weight: 590;  
${tw`
    text-white
    text-4xl
    `
  }
`;

export const Wrapper = styled.div`
border:2px solid transparent;
background: ${props => props.bcol};
transition: 0.8s;
&:hover{
  border:2px solid ${props => props.brcol};
  .saber-img>img{
    opacity:1;
    ${tw`right-2`}
  }
}
  ${tw`
       rounded-3xl
       py-12
       px-9
     `}
  @media (max-width: 900px) {
    grid-column: span 7;
  }


`;

export const SectionContainer = styled.div`
  ${tw`mb-12`}
`;

export const Saber = styled.div`
${tw`
  overflow-hidden
  mt-2
`}
&>img{
    transition: all 0.3s linear;
    width:fit-content;
    ${tw`opacity-0`}
  }
`;

export const SponsorContainer = styled.div`

    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    justify-content: center;
  
    @media (max-width: 1380px) {
        grid-template-columns: repeat(auto-fit, minmax(85px, 1fr));
    }
    @media (max-width: 639px) {
        grid-template-columns: repeat(2, minmax(50px, 1fr));
    }
`;

const SponsorLogo = styled.div`
  ${tw`p-3  m-auto justify-center align-middle`}
`;

export const ImageContainer = ({ src, alt, size, link}) => (
  <SponsorLogo>
    {src ? (
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={src} alt={alt} style={{ width: size}} />
      </a>
    ) : (
      <div />
    )}
  </SponsorLogo>
);