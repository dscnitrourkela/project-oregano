import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-xs
   leading-3.5
   sm:text-base
   sm:leading-5
   font-Inter
`}
`;
