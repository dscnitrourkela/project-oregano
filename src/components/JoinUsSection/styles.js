import styled from "styled-components";
import tw from "twin.macro";

export const GridContainer = styled.div`
    ${tw`
    overflow-x-hidden
    overflow-y-hidden
    grid
    md:grid-cols-12
    gap-12
    mx-20
    `}
`;

export const HackSpeakerDiv = styled.div`
    ${tw`
    md:col-span-6
    grid
    // grid-rows-4
    p-8
    bg-background-dark
    rounded-2xl
    gap-6
    `}
`;

export const ContentImage = styled.img`
    ${tw`
        // row-span-2
        w-full
        h-auto
    `}
`;

export const ContentText = styled.div`
    ${tw`
        // row-span-1
        w-full
    `}
`;

export const Head = styled.div`
    ${tw`
    w-full
    md:grid
    md:grid-cols-6
    mb-3
    `}
`;

export const Header = styled.div`
    ${tw`
    md:col-span-5
    md:grid
    md:justify-items-start
    uppercase
    `}
`;

export const HeadImage = styled.div`
    ${tw`
    md:col-span-1
    grid
    justify-items-end
    `}
`;

export const Image = styled.img`
    ${tw`
    md:w-full
    w-1/3
    h-auto
    `}
`;

export const ButtonContainer = styled.div`
    ${tw`
    // row-span-1
    grid
    justify-items-end
    m-0
    `}
`;

export const CommunityPartnerDiv = styled.div`
    ${tw`
    md:col-span-7
    grid
    p-8
    bg-background-dark
    rounded-2xl
    gap-6
    `}
`;

export const CampusAmbassadorDiv = styled.div`
    ${tw`
    md:col-span-5
    grid
    p-8
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
