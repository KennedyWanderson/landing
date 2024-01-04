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
          alt="Image"
          src={props.image} // Ajuste para exibir a imagem corretamente
        />
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

export default function ResponsiveGrid() {
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid>
                    <div className="flex flex-col items-center p-5 shadow-md rounded-xl bg-gray-100">
                        <div className="flex items-center justify-center ">
                            <ActionAreaCard text="teste" image="caminho_para_a_sua_imagem.jpg" />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
