import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-sm
   leading-4
   sm:text-base
   sm:leading-6
   font-Inter
`}
`;
