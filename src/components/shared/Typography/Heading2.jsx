import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h2`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw`
   text-3.5xl 
   leading-9

   sm:text-4.5xl
   sm:leading-11

   text-color-primary
   font-Noto
`}
`;
