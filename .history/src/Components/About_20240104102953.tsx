import { Container, Box, Grid } from "@mui/material"
import OutlinedCard from "./Card"

interface AboutProps {
    texto: string
    icone?: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}


export default function About(props: AboutProps) {
    return (

        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item>xs=2</Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
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
        </Container>

    )
}