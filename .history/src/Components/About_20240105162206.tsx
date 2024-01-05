import * as React from 'react';
import Grid from '@mui/material/Grid';
import OutlinedCard from './Card';

export default function ResponsiveGrid() {
  return (
    <>
        <div>
            <span>Projetos</span>
        </div>
        <Grid container spacing={2}>
        {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <OutlinedCard />
            </Grid>
        ))}
        </Grid>
    );
    
    </>
}
