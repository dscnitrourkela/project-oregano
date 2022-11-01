import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h1`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-11xl
   leading-12 

   sm:text-12xl
   sm:leading-13

   text-color-primary
`}
`;
