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
} from './Prizes.styles';
import goldImageURL from './static/gold.png';
import silverImageURL from '.static/silver.png';
import bronzeImageURL from '.static/bronze.png';

const imageUrls = [goldImageURL, silverImageURL, bronzeImageURL];
const prizeValues = ['100k', '30k', '20k'];
const prizeShadowColors = ['aqua', 'darkblue', 'purple'];

const prizeDescriptions = [
  {
    cash: '50k',
    swags: '40k worth of swags',
    merchandise: 'official merchandise',
  },
  {
    cash: '50k',
    swags: '40k worth of swags',
    merchandise: 'official merchandise',
  },
  {
    cash: '50k',
    swags: '40k worth of swags',
    merchandise: 'official merchandise',
  },
];

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
      <div style={{ margin: '60px', paddingLeft: '0px', color: 'white' }}>
        <PrizesTitle>Prizes</PrizesTitle>

        <PrizesContainer>
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              onMouseEnter={() => handleBoxHover(index)}
              onMouseLeave={handleBoxLeave}
            >
              <Box expanded={expandedIndex === index} shadowColor={prizeShadowColors[index]}>
                <img src={imageUrl} alt="Medal" style={{ maxWidth: '100%', maxHeight: '100%' }} />

                {expandedIndex === index && (
                  <Description>
                    <TotalPrizes  style={{ marginTop: '10px' }}>
                      Total Prize - {prizeValues[index]}
                    </TotalPrizes>
                    <PrizeText style={{ bottom: '20px',marginTop: '32px' }}>
                    <CashPrize style={{ color: 'var(--primary-blue-3, #02DAFF)', textAlign: 'center', fontFamily: 'Prompt', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px' }}>
                      Cash Prize {prizeDescriptions[index].cash}
                      </CashPrize>

                      <Swags style={{ color: 'var(--primary-purple-2, #B067FF)', textAlign: 'center', fontFamily: 'Prompt', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px' }}>+ {prizeDescriptions[index].swags}</Swags>
                      <Merchandise style={{ color: 'var(--primary-green-2, #43F4AA)', textAlign: 'center', fontFamily: 'Prompt', fontSize: '18px', fontStyle: 'normal', fontWeight: '500', lineHeight: '24px' }}>+ {prizeDescriptions[index].merchandise}</Merchandise>
                    </PrizeText>
                  </Description>
                )}
              </Box>
            </div>
          ))}
        </PrizesContainer>
      </div>
    </PrizesContainerWrapper>
  );
};

export default Prizes;