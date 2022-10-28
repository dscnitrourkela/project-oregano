import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw`
   text-sm
   leading-6 

   sm:text-lg
   sm:leading-5 

   text-color-primary
   font-Noto
`}
`;
