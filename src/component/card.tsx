import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CarCardProps {
  car: {
    vehicle: string;
    imageURL: string;
    price: string;
    description: string[];
  };
  id: number;
}

export default function Card({ car, id }: CarCardProps) {
  console.log('ini data mobil', id);
  return (
    <>
      <article className='w-full px-8 py-2 overflow-hidden bg-white border-2 border-gray-100 rounded-lg shadow-sm'>
        <Image
          alt=''
          src={car.imageURL}
          className='object-cover '
          width={300}
          height={56}
        />

        <div className='p-4 sm:p-6'>
          <a href='#'>
            <h3 className='text-lg font-medium text-gray-900'>{car.vehicle}</h3>
          </a>

          <p className='mt-2 text-gray-500 line-clamp-3 text-sm/relaxed'>
            {car.description}
          </p>

          <Link
            className='inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 group'
            href={`/product/${id}`}>
            <span>{car.price}</span>
            <span
              aria-hidden='true'
              className='block transition-all group-hover:ms-0.5 rtl:rotate-180'>
              &rarr;
            </span>
          </Link>
        </div>
      </article>
    </>
  );
}
