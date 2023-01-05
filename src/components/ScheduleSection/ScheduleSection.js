import React from "react";
import schedule from "../../../config/content/Schedule";
import { Body1, Body2, Caption, Heading2, Heading3, Heading4 } from "../shared";
import { SectionLayout } from "../shared";
import { GridContainer, DateContainer, EventContainer, EventDetailContainer, EventDetails, EventSpeaker, StarJediFont, EventCompletion, EventIndividualContainer, DottedLine } from "./styles";
import styled from "styled-components";
import tw from "twin.macro";
const Caption1 = styled.p`
font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-xm
   leading-3 

   sm:text-sm
   sm:leading-4.5

   text-color-primary
   font-Inter
`}
`;
export default function ScheduleSection() {
    return (
        <>
        <div className='w-full  mb-9'>
            <Heading2 semibold>ROUND 1</Heading2>
        </div>
        <StarJediFont />
        <SectionLayout>
            <GridContainer>
                {
                    schedule.schedule.map(({date, events}) => (
                        <>
                            <DateContainer>
                                {date}
                            </DateContainer>
                            <EventContainer>
                                <DottedLine length={events.length} />
                                {
                                    events.map(({type, eventName, img, speakerName, time,completed},idx) => (
                                        <EventIndividualContainer key={idx}>
                                            {/* <img src='https://res.cloudinary.com/dme9vltjf/image/upload/v1672810798/Schedule%20Section/Ellipse_1_xr37vx.png' /> */}
                                            <EventCompletion completed={completed} />
                                            <EventDetailContainer>
                                                <EventDetails>
                                                    <Caption className="text-[#FFD60A] capitalize">{type}</Caption>
                                                    <Heading4 semibold>{eventName}</Heading4>
                                                    <EventSpeaker>
                                                        {img?(
                                                            <>
                                                            <img src={img} />
                                                            <Body2 className="text-xs">{speakerName}</Body2>
                                                            </>
                                                        ):(
                                                            <div />
                                                        )}
                                                    </EventSpeaker>
                                                </EventDetails>

                                                <Body2 className="text-[#C7C7CC]">{time}</Body2>
                                            </EventDetailContainer>
                                        </EventIndividualContainer>
                                    ))
                                }
                            </EventContainer>
                        </>
                    ))
                }
            </GridContainer>
        </SectionLayout>
    
    </>
    );
}