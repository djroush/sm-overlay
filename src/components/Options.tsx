
import { Grid, Stack } from '@mui/material';
import { OptionsState } from '../redux/state/OptionsState';
import LabeledCheckbox from './LabeledCheckbox';

export type OptionsProps = OptionsState & {
    changeShowPlayers: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowLogo: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowSettings: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowTracker: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowAvatar: (_: React.SyntheticEvent, checked: boolean) => void,
    changeShowWins: (_: React.SyntheticEvent, checked: boolean) => void,
}

export default function Options(props: OptionsProps) {
    const { showPlayers, showLogo, showSettings, showTracker, showAvatar, showWins, 
        changeShowPlayers, changeShowLogo, changeShowSettings, changeShowTracker,
        changeShowAvatar, changeShowWins } = props

    return (
        <Stack>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Players' value={showPlayers ?? false} onChange={changeShowPlayers} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Logo' value={showLogo ?? false} onChange={changeShowLogo} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Settings' value={showSettings ?? false} onChange={changeShowSettings} />
                </Grid>
            </Grid >
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Tracker' value={showTracker ?? true} onChange={changeShowTracker} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Avatar' value={showAvatar ?? true} onChange={changeShowAvatar} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Show&nbsp;Wins' value={showWins ?? true} onChange={changeShowWins} />
                </Grid>
            </Grid >
        </Stack>
    )
}
