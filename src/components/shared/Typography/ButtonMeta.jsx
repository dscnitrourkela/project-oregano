import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-xs
   leading-3.5

   sm: text-sm
   sm:leading-4.5
   
   text-color-primary
   font-Noto
`}
`;
