import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gsap from 'gsap';


interface AboutProps {
    text: string;
    icone?: any;
    url?: string;
    className?: string;
    onClick?: (evento: any) => void;
}

function CardContentComponent(props: AboutProps) {

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            animateCard();
        }
    }, []); // Executa a função uma vez após a montagem do componente

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
                <CardContentComponent text="texto aqui" />
            </Card>
        </Box>
    );
}
