import React from 'react';
import { fetchProductBySlug, fetchProducts } from '@/app/lib/data';
import { MoreProducts } from '@/app/ui';
import { ProductDetail } from '@/app/ui';


export default async function Page({ params: { slug } }) {
  const [product, products] = await Promise.all([fetchProductBySlug(slug), fetchProducts()]);

  return (
    <div>
      <ProductDetail product={product} />
      <MoreProducts products={products} />
    </div>
  )
}

