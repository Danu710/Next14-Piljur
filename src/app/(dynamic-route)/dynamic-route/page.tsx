import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dynamic Route',
};

export default function page() {
  return (
    <div className='flex flex-col justify-between mx-auto max-w-7xl'>
      <div className='flex justify-center'>
        <h1 className='font-mono text-3xl'>Dynamic Route</h1>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-mono text-xl'>Route1</h1>
        <h1 className='font-mono text-xl'>Route2</h1>
        <h1 className='font-mono text-xl'>Route3</h1>
      </div>
    </div>
  );
}
