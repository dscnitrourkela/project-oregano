'use client';

import { NavBar } from '@/components/navbar/navbar';

function HOC({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default HOC;
