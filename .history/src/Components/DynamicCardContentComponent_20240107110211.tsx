import * as React from 'react';
import dynamic from 'next/dynamic'; // Importe dynamic do next/dynamic para importar o componente de forma dinâmica
import { Box } from '@mui/material';

const DynamicCardContentComponent = dynamic(
  () => import('./Card'), // Substitua pelo caminho do seu componente CardContentComponent
  { client: { ssr: false } } // Use a opção client para garantir que o componente seja renderizado apenas do lado do cliente
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        {/* Importa dinamicamente e renderiza o componente CardContentComponent dentro do Card */}
        <DynamicCardContentComponent text="texto aqui" />
      </Card>
    </Box>
  );
}
