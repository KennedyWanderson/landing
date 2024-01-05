import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

export default function ResponsiveGrid() {
    return (
        <Grid>
            {Array.from(Array(6)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index}>
                    <div><Outli</div>
                </Grid>
            ))}
        </Grid>
    );
}

