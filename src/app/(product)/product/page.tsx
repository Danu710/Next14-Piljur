'use client';
import Card from '@/component/card';
import React from 'react';
import useSWR from 'swr';
import LoadingSkeleton from '@/component/loadingskeleton';
import ErrorComponent from '@/component/error';

export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(
    'https://private-f2fbfb-ridecar2.apiary-mock.com/vehicles',
    fetcher
  );

  console.log('data', data);

  if (error)
    return (
      <div>
        <ErrorComponent />
      </div>
    );
  //if (!data) return <div>Loading...</div>;

  return (
    <div className='flex justify-center'>
      <div>
        {!data ? (
          <LoadingSkeleton />
        ) : (
          data.type.map((item: any) => (
            <div key={item.id}>
              <div className='grid gap-3 px-3 mx-2 my-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {item.car_type.map((car: any) => (
                  <div key={car.vehicle}>
                    <Card car={car} id={item.id} />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
