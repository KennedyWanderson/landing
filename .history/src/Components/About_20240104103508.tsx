import * as React from 'react';
import { Container } from "@mui/material"
import Box from '@mui/material/Box';
import { Paper } from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OutlinedCard from "./Card"
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface AboutProps {
    texto: string
    icone?: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}


export default function About(props: AboutProps) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (

        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>
                                <div className="flex flex-col items-center p-5 shadow-md rounded-xl bg-gray-100">
                                    <div className="flex items-center justify-center tracking-wider space-x-6">
                                        <OutlinedCard />
                                        <OutlinedCard />
                                        <OutlinedCard />
                                        <OutlinedCard />
                                        <OutlinedCard />
                                        <OutlinedCard />
                                        <OutlinedCard />
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>

    )
}