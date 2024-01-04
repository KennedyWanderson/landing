import Content from "@/Components/Content";
import React, { lazy } from 'react';

const MyLazyComponent = lazy(() => import('./../Components'));
export default function Home() {
  return (
    <div>
      <Content />
    </div>
  )
}
