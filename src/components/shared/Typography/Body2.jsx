import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.semibold ? '600' : '400')};
  ${tw`
   text-sm
   leading-5
   
   md:text-base
   md:leading-5
   text-white
   font-Prompt
   
`}
`;
