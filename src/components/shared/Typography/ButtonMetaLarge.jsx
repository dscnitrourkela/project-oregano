import styled from 'styled-components';
import tw from 'twin.macro';

export default styled.p`
  font-weight: ${(props) => (props.medium ? '500' : '400')};
  ${tw`
  text-sm
  leading-5
  md:text-base
  md:leading-6
  font-Prompt

`}
`;
