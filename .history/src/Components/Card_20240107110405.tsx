import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gsap from 'gsap';

interface AboutProps {
  text: string;
  // Outras propriedades
}

export default function CardContentComponent(props: AboutProps) {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      animateCard();
    }
  }, []);

  function animateCard() {
    gsap.set(".information", { yPercent: 100 });

gsap.utils.toArray(".container").forEach((container) => {
  let info = container.querySelector(".information"),
    silhouette = container.querySelector(".silhouette .cover"),
    tl = gsap.timeline({ paused: true });

  tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

  container.addEventListener("mouseenter", () => tl.timeScale(1).play());
  container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
});

  }

  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.text}
        </Typography>
        {/* Outros elementos de conteúdo */}
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </React.Fragment>
  );
}
