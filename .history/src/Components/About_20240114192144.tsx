import * as React from 'react';
import Grid from '@mui/material/Grid';
import OutlinedCard from './Card';

export default function ResponsiveGrid() {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(1)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <OutlinedCard />
        </Grid>
                <Grid item xs={12} sm={6} md={4} key={index}>
                <OutlinedCard />
              </Grid>x
      ))}
    </Grid>
  );
}
