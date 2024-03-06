'use client';
import React from 'react';
import { BounceLoader } from "react-spinners";

const Spinner = () => {
  return (
    <BounceLoader
        loading={true}
        size={75}
    ></BounceLoader>
  )
}

export default Spinner