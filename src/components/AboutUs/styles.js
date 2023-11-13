import styled from 'styled-components';
import { Body1 } from '../shared';
import { Heading1 } from '../shared';
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 50px;
`;
export const AboutContent = styled(Body1)`
  margin-top: 20px;
  margin-bottom: 50px;
  width: 80%;
  font-size: 16px;
  line-height: 24px;
`;
export const Heading = styled(Heading1)`
  font-weight: 700;
`;
