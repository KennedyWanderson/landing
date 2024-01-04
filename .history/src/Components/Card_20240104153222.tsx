import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';

interface AboutProps {
  text: string;
  icone?: any;
  url?: string;
  className?: string;
  onClick?: (evento: any) => void;
}

function CardContentComponent(props: AboutProps) {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

 function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {/* Chama o componente CardContentComponent dentro do Card */}
        <CardContentComponent text="Seu texto aqui" />
      </Card>
    </Box>
  );
}

export default 
