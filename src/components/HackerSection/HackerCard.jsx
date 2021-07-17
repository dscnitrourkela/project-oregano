import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Title from '../shared/Typography/Heading4';
import Body from '../shared/Typography/Body';
import { hackerConstants } from './hackerConstants';

const Card = styled.div`
    ${tw`
        bg-background-darker
        h-80
        w-96
        rounded-2xl
    `}
`;

const CardBody = styled.div`
    ${tw`
        p-6
    `}
`;

const CardImage = styled.img`
    ${tw`
        w-full
    `}
`;

const Button = styled.button`
    ${tw`
        h-14 
        w-48
        mt-6
        bg-white
        border-0
        hover:bg-black
        hover:text-white
        rounded-full
        cursor-pointer
    `}
`;

const CardCol = styled.div`
    ${tw`
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-7
    `}
`;

function HackerCard(){
    return (
        <CardCol>
            {hackerConstants.map((object) => (
                <Card key={object.id}>
                    <CardImage src={object.image}/>
                    <CardBody>
                        <Title>
                            {object.title}
                        </Title>
                        <Body>
                            {object.description}
                        </Body>
                        {object.hasButton && (
                            <Button>Register Now</Button>
                        )}
                </CardBody>
            </Card>
            ))}
        </CardCol>
        
    )
}

export default HackerCard;
