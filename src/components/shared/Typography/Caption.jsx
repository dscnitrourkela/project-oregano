import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-style: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
   font-normal
   text-c
   sm:text-C
   text-color-primary
`}
`;
