import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Route Parallel',
};

type Props = {};

export default function page({}: Props) {
  return <div>page</div>;
}
