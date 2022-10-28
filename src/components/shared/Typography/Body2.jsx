import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw`
   text-xs
   leading-3.5
   
   sm:text-lg
   sm:leading-5
   text-color-primary
   font-Noto
`}
`;
