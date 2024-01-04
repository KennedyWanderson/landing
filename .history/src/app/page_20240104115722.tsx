import Content from "@/Components/Content";
import React, { lazy } from 'react';

const MyLazyComponent = lazy(() => import('./../'));
export default function Home() {
  return (
    <div>
      <Content />
    </div>
  )
}
