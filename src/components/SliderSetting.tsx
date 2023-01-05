
import { Box, Grid, InputLabel, Slider } from '@mui/material';
import { Mark } from '../model/SliderValues';

export type SliderSettingProps = {
    disabled?: boolean
    label: string,
    value: number,
    marks: Mark[]
    onChange: (event: Event, value: number | number[]) => void
}

export default function SliderSetting(props: SliderSettingProps) {
    const { disabled, label, value, marks, onChange } = { ...props }
    const min = marks[0].value
    const max = marks[marks.length-1].value

    return (
        <>
            <Grid item xs={2}>
                <InputLabel>{label}</InputLabel>
            </Grid>
            <Grid item xs={6}>
                <Box px={4}>
                    <Slider disabled={disabled ?? false} marks={marks} min={min} step={1} max={max} value={value} size='small' onChange={onChange} />
                </Box>
            </Grid>
        </>
    )
}
