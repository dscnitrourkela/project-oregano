import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-sm
   leading-6 

   sm:text-sm
   sm:leading-4 

   text-white
   font-Inter
`}
`;
