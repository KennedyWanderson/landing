import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import OutlinedCard from './Card';



export default function  ResponsiveGrid () {
    return (
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid xs={2} sm={4} md={4} key={index}>
      <Item>xs=2</Item>
    </Grid>
  ))}
</Grid>
    );
}
