import React from 'react';

type Props = {};

export default function layout({
  children,
  sidebar,
  topbar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
}) {
  return (
    <>
      {sidebar}
      {topbar}
      {children}
    </>
  );
}
