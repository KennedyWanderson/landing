import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface AboutProps {
    text: string;
    icone?: any;
    url?: string;
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
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


function CardContentComponent(props: AboutProps) {
    return (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.text}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.text}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.text}
                </Typography>
                <Typography variant="body2">
                    {props.text}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </React.Fragment>
    );
}

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                {/* Chama o componente CardContentComponent dentro do Card */}
                <CardContentComponent text="Seu texto aqui" />
            </Card>
        </Box>
    );
}
