/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  const isSmallerScreenRef = useRef(window.innerWidth <= 768);

  const handleBoxHover = (index) => {
    setExpandedIndex(index);
  };
  const handleBoxLeave = () => {
    setExpandedIndex(null);
  };
  const handleBoxClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        isSmallerScreenRef.current = true;
      } else {
        isSmallerScreenRef.current = false;
        setExpandedIndex(null);
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
          <div
            key={item.id}
            onMouseEnter={() => handleBoxHover(item.id)}
            onMouseLeave={handleBoxLeave}
            onClick={isSmallerScreenRef.current ? () => handleBoxClick(item.id) : undefined}
          >
            <Box expanded={expandedIndex === item.id} shadowColor={item.prizeShadowColor}>
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
