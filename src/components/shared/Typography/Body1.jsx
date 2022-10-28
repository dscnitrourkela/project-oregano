import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-style: ${(props) => (props.semibold ? 'semibold' : 'normal')};
  ${tw`
   text-sm
   leading-4.5

   sm:text-xl
   sm:leading-6

   text-color-primary
   font-Noto
`}
`;
