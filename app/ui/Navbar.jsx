'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Cart } from '.';
import logo from '../TECHAVEN-logo.png';
import { AiOutlineShopping } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { totalQuantities, showCart, setShowCart} = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          <Image src={logo} width={190} height={50} alt='Tec Haven Logo'/>
        </Link>
      </p>
      <button className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping fontSize={30}/>
        {totalQuantities > 0 && <span className='cart-item-qty'>{totalQuantities}</span>}
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;