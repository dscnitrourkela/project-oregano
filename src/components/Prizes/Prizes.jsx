/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from 'react';
import {
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
} from './styles';
import { PrizesContent } from '../../../config';

const Prizes = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('#272727');
  const isMobile = window.innerWidth <= 768;
  const isSmallerScreenRef = useRef(isMobile);

  const handleBoxInteraction = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      setSelectedBackgroundColor('#272727');
    } else {
      setExpandedIndex(index);
      setSelectedBackgroundColor(PrizesContent.prizeData[index - 1].prizeShadowColor);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      isSmallerScreenRef.current = newIsMobile;
      if (!newIsMobile) {
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
    <PrizesContainerWrapper>
      <PrizesTitle>{PrizesContent.title}</PrizesTitle>
      <PrizesContainer>
        {PrizesContent.prizeData.map((item) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            key={item.id}
            onClick={() => (isMobile ? handleBoxInteraction(item.id) : undefined)}
            onMouseEnter={() => (!isMobile ? handleBoxInteraction(item.id) : undefined)}
          >
            <Box
              expanded={expandedIndex === item.id}
              shadowColor={item.prizeShadowColor}
              backgroundColor={expandedIndex === item.id ? selectedBackgroundColor : '#272727'}
            >
              <img src={item.src} alt='Medal' />
              {expandedIndex === item.id && (
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
  );
};

export default Prizes;
