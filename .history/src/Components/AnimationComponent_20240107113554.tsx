import { useEffect } from 'react';
import gsap from 'gsap';

const AnimationComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.box', { x: 100, rotation: 360 });
  }, []);

  return (
    <div className="container">
              <style jsx>{`
        .box {
          width: 100px;
          height: 100px;
          background-color: #3498db;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <div className="box">Elemento animado</div>
    </div>
  );
};

export default AnimationComponent;
