import './globals.css';

import HOC from '@/components/shared/hoc/HOC';
import GlobalStyles from '@/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';

import { dmsans, inter, poppins, prompt, proza, satoshi } from '../fonts/fonts';

export const metadata = {
  title: 'HackNitR',
  description: 'HackNitR is a hackathon hosted by the National Institute of Technology, Rourkela.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} ${proza.variable} ${inter.variable} ${prompt.variable} ${dmsans.variable} ${satoshi.variable} antialiased`}
      >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <HOC>{children}</HOC>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
