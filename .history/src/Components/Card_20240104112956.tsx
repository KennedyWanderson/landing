import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

interface AboutProps {
    text: string;
    image?: string;
    className?: string;
    onClick?: (evento: any) => void;
}

const ActionAreaCard: React.FC<AboutProps> = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                {props.image && (
                    <CardMedia
                        component="img"
                        height="140"
                        alt="Image"
                        src={props.image}
                    />
                )}
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

export default ActionAreaCard;
