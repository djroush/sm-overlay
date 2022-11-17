
import { Box, Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { PreviewState } from '../redux/state/PreviewState';
import Canvas from '../containers/Canvas';
import { OptionsState } from '../redux/state/OptionsState';

export type PreviewProps = PreviewState & OptionsState & {
    downloadOverlay: () => void
}

export default function PreviewComp(props: PreviewProps) {
    const {
        background, logo, streams, names, timers, trackers, avatars, wins, players, settings,
        showPlayers, showLogo, showSettings, showTracker, showAvatar, showWins, downloadOverlay
    } = props


    const CanvasLayer = styled(Box)({
        position: 'absolute', top: 16
    })

    return (
        <Stack id="canvases" direction="column" spacing={1} minWidth='100%'>
            <Box height={720} width={1280} >
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
                {showPlayers && (
                    <CanvasLayer component="div" zIndex={507}>
                        <Canvas id="players" data={players} />
                    </CanvasLayer>
                )}
                {showLogo && (
                    <CanvasLayer component="div" zIndex={508}>
                        <Canvas id="logo" data={logo} />
                    </CanvasLayer>
                )}
                {showSettings && (
                    <CanvasLayer component="div" zIndex={509}>
                        <Canvas id="settings" data={settings} />
                    </CanvasLayer>
                )}
            </Box>
            <Stack direction='row' justifyContent='space-between'>
                <Box>
                    <Button variant="outlined" color="primary" onClick={downloadOverlay}>Download</Button>
                </Box>
                <Box>
                    <Button variant="outlined" color="primary" onClick={() => window.open('https://github.com/djroush/sm-overlay')}>Source Code</Button>
                </Box>
            </Stack>
        </Stack>
    )
}
