import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';



export default function ResponsiveGrid() {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <div>xs=2</div>
                </Grid>
            ))}
        </Grid>
    );
}

