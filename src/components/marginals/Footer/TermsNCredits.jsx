import React from 'react';
import { LastLine, Terms, ConditionItems, Credits } from './styles';

const TermsNCredits = ({ copyw }) => (
  <LastLine>
    <Terms>
      <ConditionItems className='pt-0 mt-0' href='#'>
        Privacy & Cookies
      </ConditionItems>
      <ConditionItems href='#'>Terms and Conditions</ConditionItems>
    </Terms>
    <Credits>{copyw.content}</Credits>
  </LastLine>
);

export default TermsNCredits;
