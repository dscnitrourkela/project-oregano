import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h4`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-base
   leading-4.5 

   sm:text-xl
   sm:leading-6 

   text-color-primary
   font-Inter
`}
`;
