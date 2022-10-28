import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw`
   text-sm
   leading-4

   sm:text-lg
   sm:leading-6

   text-color-primary
   font-Noto
`}
`;
