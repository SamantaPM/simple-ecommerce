
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { fetchBanner } from '../lib/data';

const HeroBanner = async () => {
  const hero = await fetchBanner();
  
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{hero.smallText}</p>
        <h3>{hero.midText}</h3>
        <h1>{hero.largeText1}</h1>
        <Image  src={urlFor(hero.image)} 
                width={600}
                height={600} 
                alt={hero.desc} 
                className='hero-banner-image' />
        <div>
          <Link href={`/product/${hero.product}`}>
            <button type='button'>{hero.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{hero.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;