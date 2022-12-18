
import { Grid, Stack } from '@mui/material';
import { OptionsState } from '../redux/state/OptionsState';
import LabeledCheckbox from './LabeledCheckbox';

export type OptionsProps = OptionsState & {
    changeHidePlayers: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideLogo: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideSettings: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideTracker: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideAvatar: (_: React.SyntheticEvent, checked: boolean) => void,
    changeHideWins: (_: React.SyntheticEvent, checked: boolean) => void,
}

export default function Options(props: OptionsProps) {
    const { hidePlayers, hideLogo, hideSettings, hideTracker, hideAvatar, hideWins, 
        changeHidePlayers, changeHideLogo, changeHideSettings, changeHideTracker,
        changeHideAvatar, changeHideWins } = props

    return (
        <Stack id='options'>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Logo' value={hideLogo ?? false} onChange={changeHideLogo} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Settings' value={hideSettings ?? false} onChange={changeHideSettings} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Players' value={hidePlayers ?? false} onChange={changeHidePlayers} />
                </Grid>
            </Grid >
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Tracker' value={hideTracker ?? false} onChange={changeHideTracker} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Avatar' value={hideAvatar ?? false} onChange={changeHideAvatar} />
                </Grid>
                <Grid item xs={4}>
                    <LabeledCheckbox label='Hide Wins' value={hideWins ?? false} onChange={changeHideWins} />
                </Grid>
            </Grid >
        </Stack>
    )
}
