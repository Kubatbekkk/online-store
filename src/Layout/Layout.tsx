import React, { ReactNode } from 'react';
import Footer from 'src/Components/FooterComponent';

import Navbar from 'src/Components/Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout-section">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
