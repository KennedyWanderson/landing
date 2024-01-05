import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    {/* Chama o componente CardContentComponent dentro do Card */}
                    <CardContentComponent text=" texto aqui" />
                    <div classNa="container">
                        <div class="silhouette" id="Bulbasaur"><div class="cover"></div></div>
                        <div class="card">
                            <h1>Who's</h1>
                            <div class="information" id="BulbasaurInfo">
                                <h2 id="BulbasaurName">Bulbasaur</h2>
                                <p>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</p>
                                <p class="type">Type: <button id="grass">Grass</button> <button id=poison>Poison</button></p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="silhouette" id="Charmander"><div class="cover"></div></div>
                        <div class="card">
                            <h1>That</h1>
                            <div class="information" id="CharmanderInfo">
                                <h2 id="CharmanderName">Charmander</h2>
                                <p>The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.</p>
                                <p class="type">Type: <button id="fire">Fire</button>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="silhouette" id="Squirtle"><div class="cover"></div></div>
                        <div class="card">
                            <h1>Pokémon?</h1>
                            <div class="information" id="SquirtleInfo">
                                <h2 id="SquirtleName">Squirtle</h2>
                                <p>Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.</p>
                                <p class="type">Type: <button id="water">Water</button>
                            </div>
                        </div>
                    </div>

                    <div class="instructions">Hover over a card to find out!</div>
                </Card>
            </Box>      
        </>
    );
}
