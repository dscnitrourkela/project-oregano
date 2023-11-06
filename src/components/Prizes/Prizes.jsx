/* eslint-disable max-len */
import React, { useState } from 'react';
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

  const handleBoxHover = (index) => {
    setExpandedIndex(index);
  };

  const handleBoxLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <PrizesContainerWrapper>
      <PrizesTitle>{PrizesContent.title}</PrizesTitle>

      <PrizesContainer>
        {PrizesContent.prizeData.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => handleBoxHover(item.id)}
            onMouseLeave={handleBoxLeave}
          >
            <Box expanded={expandedIndex === item.id} shadowColor={item.prizeShadowColor}>
              <img src={item.src} alt='Medal' style={{ maxWidth: '100%', maxHeight: '100%' }} />

              {expandedIndex === item.id && (
                <Description>
                  <TotalPrizes style={{ marginTop: '10px' }}>
                    Total Prize - {item.prizeValue}
                  </TotalPrizes>
                  <PrizeText style={{ bottom: '20px', marginTop: '32px' }}>
                    <div className='flex justify-center items-center'>
                      <CashPrize
                        style={{
                          color: 'var(--primary-blue-3, #02DAFF)',
                          textAlign: 'center',
                        }}
                      >
                        Cash Prize {item.cash}
                      </CashPrize>

                      <Swags
                        style={{
                          color: 'var(--primary-purple-2, #B067FF)',
                          textAlign: 'center',
                          fontFamily: 'Prompt',
                          fontStyle: 'normal',
                          lineHeight: '24px',
                        }}
                      >
                        {item.swags}
                      </Swags>
                    </div>
                    <Merchandise
                      style={{
                        color: 'var(--primary-green-2, #43F4AA)',
                        textAlign: 'center',
                        fontFamily: 'Prompt',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '24px',
                      }}
                    >
                      {item.merchandise}
                    </Merchandise>
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
