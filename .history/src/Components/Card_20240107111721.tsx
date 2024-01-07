import * as React from 'react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { CardContent, CardActions, Typography } from '@mui/material';

interface AboutProps {
  text: string;
  // Outras propriedades
}

export default function CardContentComponent(props: AboutProps) {
  const informationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (informationRef.current && containerRef.current) {
      const informationElement = informationRef.current;
      const containerElement = containerRef.current;

      gsap.set(informationElement, { yPercent: 100 });

      gsap.utils.toArray(containerElement.querySelectorAll(".container")).forEach((container) => {
        let silhouette = container.querySelector(".silhouette .cover"),
          tl = gsap.timeline({ paused: true });

        tl.to(informationElement, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

        container.addEventListener("mouseenter", () => tl.timeScale(1).play());
        container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
      });
    }
  }, []);

  return (
    <React.Fragment>
      <CardContent>
        <div ref={containerRef} className="container">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.text}
          </Typography>
        </div>
        {/* Outros elementos de conteúdo */}
      </CardContent>
      <div ref={informationRef} className="information">
        <CardActions>
          <Bu size="small">View</Button>
        </CardActions>
      </div>
    </React.Fragment>
  );
}
