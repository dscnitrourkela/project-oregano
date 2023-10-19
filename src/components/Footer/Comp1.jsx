import styled from 'styled-components';
import tw from 'twin.macro';
import { Container } from '..';

export default styled.div`
  ${tw`
  bg-white	
  text-white
  border-white
  border-2
`}
`;

export const Comp2 = styled(Container)`
background-color: red;
  ${tw`
 bg-white	
   text-white
   border-4
   border-white
`}
`;
