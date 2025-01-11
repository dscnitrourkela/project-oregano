'use client';

import Navbar from '@/components/marginals/navbar/navbar';

function HOC({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default HOC;
