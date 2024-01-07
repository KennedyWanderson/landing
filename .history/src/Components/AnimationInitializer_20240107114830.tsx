// AnimationInitializer.tsx
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import AnimationComponent from './';

const AnimationInitializer = () => {
    useEffect(() => {
        gsap.set(".information", { yPercent: 100 });

        gsap.utils.toArray(".container").forEach((container) => {
            let info = container.querySelector(".information"),
                silhouette = container.querySelector(".silhouette .cover"),
                tl = gsap.timeline({ paused: true });

            tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

            container.addEventListener("mouseenter", () => tl.timeScale(1).play());
            container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
        });;
    }, []);

    return <AnimationComponent />;
};

export default AnimationInitializer;
