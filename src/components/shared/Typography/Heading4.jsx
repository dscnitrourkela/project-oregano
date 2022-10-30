import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h4`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw`
   text-lg
   leading-5 

   sm:text-2xl
   sm:leading-7 

   text-color-primary
   font-Noto
`}
`;
