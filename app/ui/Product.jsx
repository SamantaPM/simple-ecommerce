import React from 'react';
import Image from 'next/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';

const Product = ({ product : { slug, image, name, manufacturer, price}}) => {

  return (
      <Link href={`/product/${slug?.current}`}>
        <div className="product-card">
          <Image
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt=""
          />
          <p className="product-name">{name}</p>
          <p className="product-manufacturer">{manufacturer}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
  )
}

export default Product;