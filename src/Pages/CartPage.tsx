import React from 'react';
import Layout from 'src/Layout/Layout';

export default function CartPage({ totalItems }) {
  return (
    <Layout totalItems={totalItems}>
      <h1>CartPage</h1>
    </Layout>
  );
}
