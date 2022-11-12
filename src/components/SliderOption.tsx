
import { Box, Grid, InputLabel, Slider } from '@mui/material';
import { Mark } from '../model/SliderValues';

export type OptionProps = {
    disabled?: boolean
    label: string,
    value: number,
    marks: Mark[]
    onChange: (event: Event, value: number|number[]) => void
}

export default function Option(props: OptionProps) {
    const { disabled, label, value, marks, onChange } = { ...props }

    return (
        <>
            <Grid item xs={3}>
                <InputLabel>{label}</InputLabel>
            </Grid>
            <Grid item xs={9}>
                <Box px={4}>
                    <Slider disabled={disabled ?? false} marks={marks} min={1} step={1} max={marks.length} value={value} size='small' onChange={onChange} />
                </Box>
            </Grid>
        </>
    )
}
