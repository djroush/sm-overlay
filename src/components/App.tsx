import * as React from 'react';

import Settings from '../containers/Settings';
import Names from '../containers/Players';
import Options from '../containers/Options';
import Preview from '../containers/Preview';

import { Grid, Stack } from '@mui/material';


export default function App() {
    return (
        <Grid container spacing={3} padding={2}>
            <Grid item xs={3}>
               <Stack spacing={2} padding={3}>
                    <Settings/>
                    <Names/>
                    <Options/>
                </Stack>
                
            </Grid>
            <Grid item xs={9}>
                <Preview />
            </Grid>
        </Grid>
    )
}
