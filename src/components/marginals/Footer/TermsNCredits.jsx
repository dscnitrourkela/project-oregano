import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { LastLine, Terms, ConditionItems, Credits } from './styles';

const TermsNCredits = ({ copyw }) => {
  return (
    <LastLine>
      <Terms>
        <ConditionItems>Privacy & Cookies</ConditionItems>
        <ConditionItems>Terms and Conditions</ConditionItems>
      </Terms>

      <Credits>{copyw.content}</Credits>
    </LastLine>
  );
};

export default TermsNCredits;
