    import * as React from 'react';
    import Grid from '@mui/material/Unstable_Grid2';
    import OutlinedCard from './Card';

    export default function ResponsiveGrid() {
        return (
            <Grid>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <div>
                            <OutlinedCard />
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    }

