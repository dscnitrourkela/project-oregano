import styled from "styled-components";
import tw from "twin.macro";

export const GridContainer = styled.div`
    ${tw`
    overflow-x-hidden
    overflow-y-hidden
    grid
    md:grid-cols-12
    gap-12
    md:mx-20
    `}
`;

export const HackSpeakerDiv = styled.div`
    ${tw`
    md:col-span-6
    grid
    p-6
    bg-background-dark
    rounded-2xl
    gap-6
    `}
`;

export const ContentImage = styled.img`
    ${tw`
        w-full
        h-auto
    `}
    
`;

export const ContentText = styled.div`
    ${tw`
        w-full
    `}
`;

export const Head = styled.div`
    ${tw`
    w-full
    grid
    md:grid-cols-6
    mb-3
    grid-cols-5
    `}
`;

export const Header = styled.div`
    ${tw`
    md:col-span-5
    md:grid
    md:justify-items-start
    col-span-3
    uppercase
    `}
`;

export const HeadImage = styled.div`
    ${tw`
    md:col-span-1
    col-span-2
    grid
    justify-items-end
    `}
`;

export const Image = styled.img`
    ${tw`
    md:w-full
    //w-1/4
    h-auto
    `}
`;

export const ButtonContainer = styled.div`
    ${tw`
    grid
    content-end
    md:justify-items-end
    justify-items-center
    m-0
    `}
`;

export const CommunityPartnerDiv = styled.div`
    ${tw`
    md:col-span-7
    grid
    p-6
    bg-background-dark
    rounded-2xl
    gap-6
    items-end
    `}
`;

export const CampusAmbassadorDiv = styled.div`
    ${tw`
    md:col-span-5
    grid
    grid-rows-2
    p-6
    bg-background-dark
    rounded-2xl
    gap-6
    items-end
    `}
`;

export const Head2 = styled.div`
    ${tw`
    w-full
    mb-3
    uppercase
`}
`;
