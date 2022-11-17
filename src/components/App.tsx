import * as React from 'react';

import Settings from '../containers/Settings';
import Names from '../containers/Players';
import Options from '../containers/Options';
import Preview from '../containers/Preview';

import { Box, Stack } from '@mui/material';


export default function App() {
    return (
        <Stack spacing={3} padding={2} direction="row">
            <Box minWidth={600} maxWidth="25vw">
               <Stack spacing={2} padding={3}>
                    <Settings/>
                    <Names/>
                    <Options/>
                </Stack> 
            </Box>
            <Box width={1280}>
                <Preview />
            </Box>
        </Stack>
    )
}
