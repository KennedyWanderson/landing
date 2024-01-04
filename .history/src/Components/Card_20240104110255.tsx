import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface AboutProps {
    text: string;
    icone?: any;
    image?: string;
    className?: string;
    onClick?: (evento: any) => void;
}

export default function ActionAreaCard(props: AboutProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="green iguana"
            ></CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

