import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ActionAreaCard from './Card';


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

