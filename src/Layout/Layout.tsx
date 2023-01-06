import React, { ReactNode } from 'react';
import Footer from 'src/Components/FooterComponent';

import Navbar from 'src/Components/Navbar';

export default function Layout({ children, totalItems }: {
  children: ReactNode, totalItems: number }) {
  return (
    <div className="layout-section">
      <Navbar totalItems={totalItems} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
