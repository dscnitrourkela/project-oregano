import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h4`
  font-style: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw`
   font-normal
   text-h4
   sm:text-H4
   text-color-primary
`}
`;
