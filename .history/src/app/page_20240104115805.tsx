import React, { lazy } from 'react';

const MyLazyComponent = lazy(() => import('./../Components/Content'));
export default function Home() {
  return (
    <div>
      <MyLazyComponent />
    </div>
  )
}