import React from 'react';
import { LastLine, Terms, ConditionItems, Credits } from './styles';

const TermsNCredits = ({ copyw }) => (
  <LastLine>
    <Terms>
      {copyw.map((link) => (
        <ConditionItems href={link.href} key={link.id} target='_blank' rel='noreferrer'>
          {link.text}
        </ConditionItems>
      ))}
    </Terms>
    <Credits>Architected with ❤️ by HackNITR Team</Credits>
  </LastLine>
);

export default TermsNCredits;
