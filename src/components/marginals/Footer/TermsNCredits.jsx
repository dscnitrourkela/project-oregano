import React from 'react';
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
