import React from "react";
import schedule from "../../../config/content/Schedule";
import { Body1, Body2, Caption, Heading2, Heading3, Heading4 } from "../shared";
import { SectionLayout } from "../shared";
import { GridContainer, DateContainer, EventContainer, EventDetailContainer, EventDetails, EventSpeaker, StarJediFont, EventCompletion, EventIndividualContainer, DottedLine } from "./styles";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading } from "./styles";
const Caption1 = styled(Caption)`
${tw`
    text-[#FFD60A] 
    capitalize
`}
`;

const EventHeading = styled(Heading4)`
width:100%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

export default function ScheduleSection() {
    return (
        <>
            <StarJediFont />
            <SectionLayout>
            <SectionHeading>
                <Heading2 semibold>ROUND 1</Heading2>
            </SectionHeading>
                <GridContainer>
                    {
                        schedule.schedule.map(({ date, events }) => (
                            <>
                                <DateContainer>
                                    {date}
                                </DateContainer>
                                <EventContainer>
                                    <DottedLine length={events.length} />
                                    {
                                        events.map(({ type, eventName, img, speakerName, time, completed }, idx) => (
                                            <EventIndividualContainer key={idx}>
                                                {/* <img src='https://res.cloudinary.com/dme9vltjf/image/upload/v1672810798/Schedule%20Section/Ellipse_1_xr37vx.png' /> */}
                                                <EventCompletion completed={completed} />
                                                <EventDetailContainer>
                                                    <EventDetails>
                                                        <Caption1 >{type}</Caption1>
                                                        <EventHeading semibold>{eventName}</EventHeading>
                                                        <EventSpeaker>
                                                            {img ? (
                                                                <>
                                                                    <img src={img} />
                                                                    <Body2 style={{fontSize:'12px'}}>{speakerName}</Body2>
                                                                </>
                                                            ) : (
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