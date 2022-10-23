import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.h3`
  font-style: ${(props) => (props.bold ? 'bold' : 'normal')};
  ${tw` 
   font-normal
   text-h3
   sm: text-H3
   text-color-primary
`}
`;
