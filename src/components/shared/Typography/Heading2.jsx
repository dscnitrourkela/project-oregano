import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h2`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-3.5xl 
   leading-9

   sm:text-4.5xl
   sm:leading-11

   text-color-primary
   font-Noto
`}
`;
