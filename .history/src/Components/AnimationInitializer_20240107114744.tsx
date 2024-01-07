// AnimationInitializer.tsx
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AnimationComponent from './AnimationComponent';

const AnimationInitializer = () => {
  useEffect(() => {
    // Sua lógica com useEffect aqui, por exemplo:
    // gsap.to('.box', { x: 100, rotation: 360 });
  }, []);

  return <AnimationComponent />;
};

export default AnimationInitializer;
