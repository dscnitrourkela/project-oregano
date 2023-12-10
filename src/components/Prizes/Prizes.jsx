/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import {
  SectionContainer,
  PrizesContainer,
  Box,
  PrizesTitle,
  Description,
  TotalPrizes,
  PrizeText,
  CashPrize,
  Swags,
  Merchandise,
  PrizesContainerWrapper,
  MobileBox,
  MobileDescription,
  MobilePrizes,
  MobilePrize,
  MobileCash,
  MobileSwags,
  MobileMerchandise,
} from './styles';
import { PrizesContent } from '../../../config';

const Prizes = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('#272727');
  const isBrowser = typeof window !== 'undefined';

  // Track whether it's a smaller screen
  const isMobile = isBrowser && window.innerWidth <= 768;
  const isSmallerScreenRef = useRef(isMobile);

  const handleBoxInteraction = (index) => {
    if (isMobile) {
      setExpandedIndex(index);
      setSelectedBackgroundColor(PrizesContent.prizeData[index - 1].prizeShadowColor);
    } else {
      setExpandedIndex(index === expandedIndex ? null : index);
      setSelectedBackgroundColor(
        index === expandedIndex ? '#272727' : PrizesContent.prizeData[index - 1].prizeShadowColor,
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      isSmallerScreenRef.current = newIsMobile;
      if (newIsMobile) {
        setExpandedIndex(null);
        setSelectedBackgroundColor('#272727');
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <SectionContainer>
      <PrizesContainerWrapper>
        <PrizesTitle>{PrizesContent.title}</PrizesTitle>
        <PrizesContainer>
          {isMobile
            ? PrizesContent.prizeData.map((item) => (
                <MobileBox key={item.id} shadowColor={item.prizeShadowColor}>
                  <img src={item.src} alt='Medal' />
                  <MobileDescription>
                    <MobilePrizes>Total Prize - {item.prizeValue}</MobilePrizes>
                    <MobilePrize>
                      <MobileCash>Cash Prize {item.cash}</MobileCash>
                      <MobileSwags>{item.swags}</MobileSwags>
                      <MobileMerchandise>{item.merchandise}</MobileMerchandise>
                    </MobilePrize>
                  </MobileDescription>
                </MobileBox>
              ))
            : PrizesContent.prizeData.map((item) => (
                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                <div
                  key={item.id}
                  onClick={() => (isMobile ? handleBoxInteraction(item.id) : undefined)}
                  onMouseEnter={() => (!isMobile ? handleBoxInteraction(item.id) : undefined)}
                >
                  <Box
                    expanded={isMobile || expandedIndex === item.id}
                    shadowColor={item.prizeShadowColor}
                    backgroundColor={
                      isMobile || expandedIndex === item.id ? selectedBackgroundColor : '#272727'
                    }
                    className={expandedIndex === item.id ? 'clicked' : ''}
                  >
                    <img src={item.src} alt='Medal' />
                    {!isMobile && expandedIndex === item.id && (
                      <Description>
                        <TotalPrizes>Total Prize - {item.prizeValue}</TotalPrizes>
                        <PrizeText>
                          <CashPrize>Cash Prize {item.cash}</CashPrize>
                          <Swags>{item.swags}</Swags>
                          <Merchandise>{item.merchandise}</Merchandise>
                        </PrizeText>
                      </Description>
                    )}
                  </Box>
                </div>
              ))}
        </PrizesContainer>
      </PrizesContainerWrapper>
    </SectionContainer>
  );
};

export default Prizes;
