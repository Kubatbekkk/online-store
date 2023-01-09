import React, { ReactNode } from 'react';
import Footer from 'src/Components/FooterComponent';
import Navbar from 'src/Components/Navbar';
import useStoreState from 'src/hooks/useStoreState';

export default function Layout({ children }: { children: ReactNode }) {
  const [state] = useStoreState();
  return (
    <div className="layout-section">
      <Navbar totalItems={state.totalItems} totalAmount={state.totalAmount} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
