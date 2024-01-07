// AnimationComponent.tsx
import { useCli } from 'react';
import gsap from 'gsap';

const AnimationComponent = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
    tl.from('.nav-bar', { y: '-100%', duration: 1, opacity: 0 });

    // Essa função retorna uma função de cleanup
    return () => {
      tl.kill(); // Pausa todas as animações ativas
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="intro">
        <h1 className="text-4xl mb-8">GreenSock Animation</h1>
        <p className="text-xl">A beautiful animation created using GSAP</p>
      </div>
      <div className="slider h-96 w-full bg-black relative">
        <div className="overlay absolute inset-0 bg-gray-800 opacity-75"></div>
        <div className="text text-white text-center pt-20">
          <h2 className="text-4xl mb-4">Slide Down</h2>
          <p className="text-xl">A stunning animation using GSAP</p>
        </div>
      </div>
      <nav className="nav-bar bg-gray-800 text-white py-4 px-8 mt-8">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AnimationComponent;
