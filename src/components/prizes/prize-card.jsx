'use client';
import { PrizeAmount, PrizeCardContainer, PrizeCardImage } from './styles';

const PrizeCard = ({ prize }) => {
  const styles = {
    '2nd': {
      rotate: '-9deg',
      marginLeft: '-15px',
    },
    '1st': {},
    '3rd': {
      rotate: '7deg',
      marginLeft: '10px',
    },
  };

  const positionStyle = styles[prize.position] || {};

  return (
    <PrizeCardContainer>
      <PrizeCardImage src={prize.image} alt='prize' height={500} width={500} />
      <PrizeAmount style={positionStyle}>{prize.amount}</PrizeAmount>
    </PrizeCardContainer>
  );
};

export default PrizeCard;
