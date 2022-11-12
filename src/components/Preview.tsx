
import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { PreviewState } from '../redux/state/PreviewState';
import Canvas from '../containers/Canvas';

export type PreviewProps = PreviewState & {
    showTracker: boolean,
    showAvatar: boolean,
    showWins: boolean,
    downloadOverlay: () => void
}

export default function PreviewComp(props: PreviewProps) {
    const {
        background, streams, names, timers, trackers, avatars, wins, information, 
        showTracker, showAvatar, showWins, downloadOverlay
    } = props


    const CanvasLayer = styled(Box)({
        position: 'absolute', top: 0
    })

    return (
        <Stack direction="column" spacing={1}>
            <Box height={720} maxHeight={720} maxWidth={1280} >
                <CanvasLayer component="div" zIndex={500}>
                    <Canvas id="background" data={background} />
                </CanvasLayer>
                <CanvasLayer component="div" zIndex={501}>
                    <Canvas id="streams" data={streams} />
                </CanvasLayer>
                <CanvasLayer component="div" zIndex={502}>
                    <Canvas id="names" data={names} />
                </CanvasLayer>
                <CanvasLayer component="div" zIndex={503}>
                    <Canvas id="timers" data={timers} />
                </CanvasLayer>
                {showTracker && (
                    <CanvasLayer component="div" zIndex={504}>
                        <Canvas id="trackers" data={trackers} />
                    </CanvasLayer>
                )}
                {showAvatar && (
                    <CanvasLayer component="div" zIndex={505}>
                        <Canvas id="avatars" data={avatars} />
                    </CanvasLayer>
                )}
                {showWins && (
                    <CanvasLayer component="div" zIndex={506}>
                        <Canvas id="wins" data={wins} />
                    </CanvasLayer>
                )}
                <CanvasLayer component="div" zIndex={507}>
                    <Canvas id="information" data={information} />
                </CanvasLayer>
            </Box>
            <Box>
                <Button variant="outlined" color="primary" onClick={downloadOverlay}>Download</Button>
            </Box>
        </Stack>
    )
}
