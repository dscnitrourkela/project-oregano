import React from "react";

import Join from "../../../config/content/Join";
import { Heading3, SectionLayout, Caption, Button } from "../shared";
import { GridContainer, HackSpeakerDiv, ContentImage, ContentText, Head, Header, HeadImage, Image, ButtonContainer, CommunityPartnerDiv, CampusAmbassadorDiv, Head2 } from "./styles";

import { Popup } from 'react-typeform-embed';

function JoinUsSection() {
    return (
         <SectionLayout id='joinUs'>
             <GridContainer>
                 <HackSpeakerDiv>
                     <ContentImage src={Join.Mentor.img.src} alt={Join.Mentor.img.alt} />
                     <ContentText>
                        <Head>
                             <Header>
                             <Heading3 semibold>{Join.Mentor.head}</Heading3>
                             </Header>
                            
                             <HeadImage>
                                <Image src={Join.Mentor.speakerImages} alt="hey there" />
                                 <Caption>
                                     +{Join.Mentor.count} others
                                 </Caption>
                             </HeadImage>
                         </Head>
                         <Caption>{Join.Mentor.description}</Caption>
                     </ContentText>
                     <ButtonContainer>
                     <Popup id='di6YLmdD' hideHeaders hideFooter autoOpen={false} autoClose={100000000}>    
                        <Button small filled text={Join.Mentor.buttonText}/>
                    </Popup>
                     </ButtonContainer>
                 </HackSpeakerDiv>

                <HackSpeakerDiv>
                    <ContentImage src={Join.Speaker.img.src} alt={Join.Speaker.img.alt} />
                    <ContentText>
                        <Head>
                            <Header>
                                <Heading3 semibold>{Join.Speaker.head}</Heading3>
                            </Header>                     
                            <HeadImage>
                                <Image src={Join.Mentor.speakerImages} />
                                <Caption>
                                    +{Join.Speaker.count} others
                                </Caption>
                            </HeadImage>
                        </Head>
                        <Caption>{Join.Speaker.description}</Caption>
                    </ContentText>
                    <ButtonContainer>
                    <Popup id='di6YLmdD' hideHeaders hideFooter autoOpen={false} autoClose={100000000}>    
                        <Button small filled text={Join.Speaker.buttonText}/>
                    </Popup>
                    </ButtonContainer>
                </HackSpeakerDiv>

                <CommunityPartnerDiv>
                    <ContentImage src={Join.Speaker.img.src} alt={Join.CommunityPartner.img.alt} />
                    <ContentText>
                        <Head2>
                            <Heading3 semibold>
                                {Join.CommunityPartner.head}
                            </Heading3>
                        </Head2>
                        <Caption>{Join.CommunityPartner.description}</Caption>
                        
                    </ContentText>
                    <ButtonContainer>
                    <Popup id='exOmpVto' hideHeaders hideFooter autoOpen={false} autoClose={100000000}>    
                        <Button small filled text={Join.CommunityPartner.buttonText} />
                    </Popup>
                    </ButtonContainer>
                </CommunityPartnerDiv>

                <CampusAmbassadorDiv>
                <ContentImage src={Join.Speaker.img.src} alt={Join.CommunityPartner.img.alt} className="h-full w-auto"/>
                    <ContentText>
                        <Head2>
                            <Heading3 semibold>
                                {Join.CampusAmbassador.head}
                            </Heading3>
                        </Head2>
                        <Caption>{Join.CampusAmbassador.description}</Caption>
                        
                    </ContentText>
                    <ButtonContainer>
                        <Popup id='Z5qUomMI' hideHeaders hideFooter autoOpen={false} autoClose={100000000}>    
                            <Button small filled text={Join.CampusAmbassador.buttonText}/>
                        </Popup>    
                    </ButtonContainer>
                </CampusAmbassadorDiv>
            </GridContainer>
        </SectionLayout>
    );
}

export default JoinUsSection;