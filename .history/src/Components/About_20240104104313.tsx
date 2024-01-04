import * as React from 'react';
import { Container, Box, Grid, Paper } from "@mui/material"
import OutlinedCard from "./Card"

export default function About() {

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(2),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));

    return (

        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            

                            
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>

    )
}