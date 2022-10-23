import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-style: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
   font-normal
   text-b2
   sm:text-B2
   text-color-primary
`}
`;
