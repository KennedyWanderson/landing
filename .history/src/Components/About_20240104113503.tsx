import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ActionAreaCard from './Card';

// Verifica se o código está rodando no lado do cliente antes de chamar experimentalStyled()
let i
if (typeof window !== 'undefined') {
    Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
} else {
    // Caso esteja no lado do servidor, define um componente vazio ou um fallback
    Item = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
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

