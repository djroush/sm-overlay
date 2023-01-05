
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { PreviewState } from '../redux/state/PreviewState';
import Canvas from '../containers/Canvas';
import { OptionsState } from '../redux/state/OptionsState';
import Actions from '../containers/Actions';

export type PreviewProps = PreviewState & OptionsState & {
    emptyAvatars: boolean
}

export default function PreviewComp(props: PreviewProps) {
    const {
        background, logo, streams, names, timers, trackers, avatars, wins, playerAvatars, players, settings,
        emptyAvatars, hidePlayers, hideLogo, hideSettings, hideTracker, hideAvatar, hideWins, logoY, settingsY
    } = props

    const CanvasLayer = styled(Box)({
        position: 'absolute'
    })

    const PreviewWindow = styled(Box)({
        position: 'relative'
    })

    return (
        <Stack id="canvases" direction="column" spacing={1} minWidth='100%'>
            <PreviewWindow height={720} width={1280} >
                <CanvasLayer zIndex={500}>
                    <Canvas id="background" data={background} />
                </CanvasLayer>
                <CanvasLayer zIndex={501}>
                    <Canvas id="streams" data={streams} />
                </CanvasLayer>
                <CanvasLayer zIndex={502}>
                    <Canvas id="names" data={names} />
                </CanvasLayer>
                <CanvasLayer zIndex={503}>
                    <Canvas id="timers" data={timers} />
                </CanvasLayer>
                {!hideTracker && (
                    <CanvasLayer zIndex={504}>
                        <Canvas id="trackers" data={trackers} />
                    </CanvasLayer>
                )}
                {!hideAvatar && (
                    <CanvasLayer zIndex={505}>
                        <Canvas id="avatars" data={avatars} />
                    </CanvasLayer>
                )}
                {!hideWins && (
                    <CanvasLayer zIndex={506}>
                        <Canvas id="wins" data={wins} />
                    </CanvasLayer>
                )}
                {!hideAvatar && !emptyAvatars && (
                    <CanvasLayer zIndex={507}>
                        <Canvas id="playerAvatars" data={playerAvatars} />
                    </CanvasLayer>
                )}
                {!hidePlayers && background && (
                    <CanvasLayer zIndex={508}>
                        <Canvas id="players" data={players} />
                    </CanvasLayer>
                )}
                {!hideLogo && background && (
                    <CanvasLayer zIndex={509}>
                        <Canvas id="logo" data={logo} left={530} top={logoY} />
                    </CanvasLayer>
                )}
                {!hideSettings && background && (
                    <CanvasLayer zIndex={510}>
                        <Canvas id="settings" data={settings} left={534} top={settingsY}/>
                    </CanvasLayer>
                )}
            </PreviewWindow>
            <Actions/>
        </Stack>
    )
}
