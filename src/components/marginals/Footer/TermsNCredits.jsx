import React from 'react';
import { LastLine, Terms, ConditionItems, Credits } from './styles';

const TermsNCredits = ({ copyw }) => {
  return (
    <LastLine>
      <Terms>
        <ConditionItems href='#'>Privacy & Cookies</ConditionItems>
        <ConditionItems href='#'>Terms and Conditions</ConditionItems>
      </Terms>
      <Credits>{copyw.content}</Credits>
    </LastLine>
  );
};

export default TermsNCredits;
