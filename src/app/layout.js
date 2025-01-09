import './globals.css';

import HOC from '@/components/shared/hoc/HOC';
import GlobalStyles from '@/GlobalStyles';
import StyledComponentsRegistry from '@/lib/registry';

export const metadata = {
  title: 'HackNitR',
  description: 'HackNitR is a hackathon hosted by the National Institute of Technology, Rourkela.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <HOC>{children}</HOC>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
