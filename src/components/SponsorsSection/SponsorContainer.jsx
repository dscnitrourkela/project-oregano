import styled from 'styled-components';

export const SponsorContainer = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 870px) {
    grid-template-columns: repeat(2, minmax(85px, 1fr));
  }
  grid-template-columns: repeat(8, minmax(85px, 1fr));
`;
