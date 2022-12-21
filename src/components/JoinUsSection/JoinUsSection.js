import React from "react";

import Join from "../../../config/content/Join";
import { Heading3, SectionLayout, Caption, Button } from "../shared";
import speakerImage from '../../../images/speakers.png'
import joinImage from '../../../images/joinUs.png'

import { GridContainer, HackSpeakerDiv, ContentImage, ContentText, Head, Header, HeadImage, Image, ButtonContainer, CommunityPartnerDiv, CampusAmbassadorDiv, Head2 } from "./styles";

function JoinUsSection() {
    return (
         <SectionLayout id='joinUs'>
             <GridContainer>
                 <HackSpeakerDiv>
                     <ContentImage src={joinImage} alt={Join.Mentor.img.alt} />
                     <ContentText>
                        <Head>
                             <Header>
                             <Heading3 semibold>{Join.Mentor.head}</Heading3>
                             </Header>
                            
                             <HeadImage>
                                <Image src={speakerImage} alt="hey there" />
                                 <Caption>
                                     +{Join.Mentor.count} others
                                 </Caption>
                             </HeadImage>
                         </Head>
                         <Caption>{Join.Mentor.description}</Caption>
                     </ContentText>
                     <ButtonContainer>
                        <a href={Join.Mentor.link} target='_blank' rel='noopener noreferrer'>
                        <Button small filled text={Join.Mentor.buttonText}/>
                        </a>
                     </ButtonContainer>
                 </HackSpeakerDiv>

                <HackSpeakerDiv>
                    <ContentImage src={joinImage} alt={Join.Speaker.img.alt} />
                    <ContentText>
                        <Head>
                            <Header>
                                <Heading3 semibold>{Join.Speaker.head}</Heading3>
                            </Header>                     
                            <HeadImage>
                                <Image src={speakerImage} />
                                <Caption>
                                    +{Join.Speaker.count} others
                                </Caption>
                            </HeadImage>
                        </Head>
                        <Caption>{Join.Speaker.description}</Caption>
                    </ContentText>
                    <ButtonContainer>
                        <a href={Join.Speaker.link} target='_blank' rel='noopener noreferrer'>
                        <Button small filled text={Join.Speaker.buttonText}/>
                        </a>
                    </ButtonContainer>
                </HackSpeakerDiv>

                <CommunityPartnerDiv>
                    <ContentImage src={joinImage} alt={Join.CommunityPartner.img.alt} />
                    <ContentText>
                        <Head2>
                            <Heading3 semibold>
                                {Join.CommunityPartner.head}
                            </Heading3>
                        </Head2>
                        <Caption>{Join.CommunityPartner.description}</Caption>
                        
                    </ContentText>
                    <ButtonContainer>
                        <a href={Join.CommunityPartner.link} target='_blank' rel='noopener noreferrer'>
                           <Button small filled text={Join.CommunityPartner.buttonText}/>
                         </a>    
                    </ButtonContainer>
                </CommunityPartnerDiv>

                <CampusAmbassadorDiv>
                <ContentImage src={joinImage} alt={Join.CommunityPartner.img.alt} className="h-full w-auto"/>
                    <ContentText>
                        <Head2>
                            <Heading3 semibold>
                                {Join.CampusAmbassador.head}
                            </Heading3>
                        </Head2>
                        <Caption>{Join.CampusAmbassador.description}</Caption>
                        
                    </ContentText>
                    <ButtonContainer>
                        <a href={Join.CampusAmbassador.link} target='_blank' rel='noopener noreferrer'>
                           <Button small filled text={Join.CampusAmbassador.buttonText}/>
                        </a>    
                        </ButtonContainer>
                </CampusAmbassadorDiv>
            </GridContainer>
        </SectionLayout>
    );
}

export default JoinUsSection;