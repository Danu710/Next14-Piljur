import React from 'react';

type Props = {};

export default function LoadingSkeleton({}: Props) {
  return (
    <div className='grid gap-3 px-3 mx-2 my-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      <article className='w-full px-8 py-2 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-lg shadow-sm animate-pulse'>
        <div className='w-full h-56 bg-gray-300'></div>

        <div className='p-4 sm:p-6'>
          <div className='w-3/4 h-6 mb-4 bg-gray-300'></div>
          <div className='w-2/4 h-4 mb-2 bg-gray-300'></div>
          <div className='w-3/4 h-4 bg-gray-300'></div>

          <div className='flex items-center gap-1 mt-4'>
            <div className='w-10 h-4 bg-gray-300'></div>
            <div className='w-10 h-4 bg-gray-300'></div>
          </div>
        </div>
      </article>
      <article className='w-full px-8 py-2 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-lg shadow-sm animate-pulse'>
        <div className='w-full h-56 bg-gray-300'></div>

        <div className='p-4 sm:p-6'>
          <div className='w-3/4 h-6 mb-4 bg-gray-300'></div>
          <div className='w-2/4 h-4 mb-2 bg-gray-300'></div>
          <div className='w-3/4 h-4 bg-gray-300'></div>

          <div className='flex items-center gap-1 mt-4'>
            <div className='w-10 h-4 bg-gray-300'></div>
            <div className='w-10 h-4 bg-gray-300'></div>
          </div>
        </div>
      </article>
      <article className='w-full px-8 py-2 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-lg shadow-sm animate-pulse'>
        <div className='w-full h-56 bg-gray-300'></div>

        <div className='p-4 sm:p-6'>
          <div className='w-3/4 h-6 mb-4 bg-gray-300'></div>
          <div className='w-2/4 h-4 mb-2 bg-gray-300'></div>
          <div className='w-3/4 h-4 bg-gray-300'></div>

          <div className='flex items-center gap-1 mt-4'>
            <div className='w-10 h-4 bg-gray-300'></div>
            <div className='w-10 h-4 bg-gray-300'></div>
          </div>
        </div>
      </article>
    </div>
  );
}
