import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface AboutProps {
    text: string
    icone?: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

function card(props: AboutProps) {
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
}

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
                
            </Card>
        </Box>
    );
}