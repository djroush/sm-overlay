import * as React from 'react';

import Settings from '../containers/Settings';
import Names from '../containers/Players';
import Options from '../containers/Options';
import Preview from '../containers/Preview';

import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';

export default function App() {
    const BoundingBox = styled(Box)({
        display: 'table', position: 'relative'
    })
    const BottomBox = styled(Box)({
        position: 'absolute', minWidth: '100%', bottom: 16
    })

    return (
        <Stack spacing={3} padding={2} direction="row">
            <BoundingBox minWidth={590} maxWidth="25vw"  minHeight="100%">
               <Stack spacing={2} padding={3}>
                    <Settings/>
                    <Names/>
                </Stack> 
                <BottomBox>
                    <Options/>
                </BottomBox>
            </BoundingBox>
            <Box width={1280}>
                <Preview />
            </Box>
        </Stack>
    )
}
