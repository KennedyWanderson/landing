// AnimationInitializer.tsx
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const AnimationComponent = dynamic(() => import('./AnimationComponent'), {
  ssr: false
});

const AnimationInitializer = () => {
  useEffect(() => {
    const loadAnimation = async () => {
      const { default: gsap } = await import('gsap');
      // Aqui você pode iniciar sua animação com GSAP usando a lógica do useEffect
    };
    loadAnimation();
  }, []);

  return <AnimationComponent />;
};

export default AnimationInitializer;
