'use client';

import Navbar from '@/components/marginals/navbar/navbar';
import { ReactLenis } from '@/lib/lenis';

function HOC({ children }) {
  return (
    <ReactLenis root>
      <Navbar />
      {children}
    </ReactLenis>
  );
}

export default HOC;
