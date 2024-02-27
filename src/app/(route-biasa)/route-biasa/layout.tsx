import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Layout route biasa',
  description: 'Layout route biasa',
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl mx-auto' lang='en'>
      <h1 className='text-3xl font-mono'>Layout route biasa</h1>
      {children}
    </div>
  );
}
