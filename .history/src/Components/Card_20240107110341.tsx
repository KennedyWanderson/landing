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
    // Sua lógica de animação com gsap aqui
    // ...
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
