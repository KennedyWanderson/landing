import { useEffect } from 'react';
import gsap from 'gsap';

const AnimationComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.box', { x: 100, rotation: 360 });
  }, []);

  return (
    <div className="container">
      <div className="box">Elemento animado</div>
    </div>
  );
};

export default AnimationComponent;
