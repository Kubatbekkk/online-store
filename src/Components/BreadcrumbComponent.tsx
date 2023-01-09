import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';

export default function Breadcrumbs(product: Product) {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Store</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>{product.category}</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>{product.brand}</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{product.title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}
