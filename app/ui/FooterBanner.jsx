import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';
import { fetchBanner } from '@/app/lib/data';

const FooterBanner = async () => {
  const hero = await fetchBanner();

  const { 
        discount,
        largeText1,
        largeText2,
        saleTime,
        smallText,
        midText,
        desc,
        product,
        buttonText,
        image,
      } = hero;

  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          {largeText2 && <h3>{largeText2}</h3> }
          {saleTime && <p>{saleTime}</p>}
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <Image 
              width={500} 
              height={500} 
              src={urlFor(image)} 
              className='footer-banner-image'
              alt={desc} />
      </div>
    </div>
  )
}

export default FooterBanner;