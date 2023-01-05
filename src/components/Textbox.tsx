import { Grid, Typography, TextField, InputProps, styled, Box } from "@mui/material";

export type TextBoxProps = InputProps & {
    label: string,
    value: number,
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const CenteredBox = styled(Box)({
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'right',
})

const LabelText = styled(Typography)({
    display: 'flex',
    marginRight: 24
})



export default function TextBox(props: TextBoxProps) {
    const { label, value, onChange } = { ...props }
    return (
        <CenteredBox sx={{minHeight:'100%'}}>
            <LabelText>{label}</LabelText>
            <TextField multiline={false} fullWidth={false} size="small" variant="standard" value={value ?? 150}
                inputProps={{ maxLength: 4 }} sx={{ width: '32px', height:'100%', minHeight:'100%' }} onChange={onChange} />
        </CenteredBox>
    )
}