'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagXFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Page = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cancel-wrapper">
      <div className="cancel">
        <p className="icon">
          <BsBagXFill />
        </p>
        <h2>We could not process your order</h2>
        <p className="email-msg">Please try again.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Page;