import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h4`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-lg
   leading-5 

   sm:text-2xl
   sm:leading-7 

   text-color-primary
   font-Inter
`}
`;
