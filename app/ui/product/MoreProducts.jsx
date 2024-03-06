'use client'; 
import React from 'react';
import { Product } from '..';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MoreProducts = ({products}) => {
  const settings = {
    autoplay: false,
    autoplaySpeed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    slide: '> a',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };
  return (
    <div className='maylike-products-wrapper'>
          <h2>You may also like</h2>
          <div className='marquee'>
            <div className='maylike-products-container slider-container'>
              <Slider {...settings} >
                {products.map((item) => (
                  <Product key={item._id} product={item} />
                ))}
              </Slider>
            </div>
          </div>
      </div>
  )
}

export default MoreProducts;