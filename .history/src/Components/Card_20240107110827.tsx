import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gsap from 'gsap';
import { CardActions } from '@mui/material';

interface AboutProps {
    text: string;
    // Outras propriedades
}

export default function CardContentComponent(props: AboutProps) {
  
    React.useEffect(() => {
        if (containerRef.current && informationRef.current) {
          gsap.set(informationRef.current, { yPercent: 100 });
    
          gsap.utils.toArray(containerRef.current.querySelectorAll(".container")).forEach((container) => {
            let info = informationRef.current,
              silhouette = container.querySelector(".silhouette .cover"),
              tl = gsap.timeline({ paused: true });
    
            tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);
    
            container.addEventListener("mouseenter", () => tl.timeScale(1).play());
            container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
          });
        }
      }, []);

    return (
        <React.Fragment>
            <CardContent>
                <div ref={containerRef}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.text}
                    </Typography>
                </div>
                {/* Outros elementos de conteúdo */}
            </CardContent>
            <div>
                <CardActions>
                    <Button size="small">View</Button>
                </CardActions>
            </div>
        </React.Fragment>
    );
}
