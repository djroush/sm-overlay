import * as React from 'react';

import Options from '../containers/Options';
import Settings from '../containers/Settings';
import Preview from '../containers/Preview';

import { Grid, Stack } from '@mui/material';

export default function App() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Stack>
                    <Settings />
                    <Options/>
                </Stack>
                
            </Grid>
            <Grid item xs={9}>
                <Preview />
            </Grid>
        </Grid>
    )
}
