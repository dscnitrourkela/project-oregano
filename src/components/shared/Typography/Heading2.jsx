import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h2`
  font-style: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
   font-normal
   text-h2
   sm:text-H2
   text-color-primary
`}
`;
