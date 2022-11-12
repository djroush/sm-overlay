import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

export type LabeledCheckboxProps = {
  label: string,
  value: boolean,
  onChange: (event: React.SyntheticEvent, checked: boolean) => void
}

export default function LabeledCheckbox(props: LabeledCheckboxProps) {
  const { label, value, onChange } = { ...props }
  return (
    <Box px={4}>
      <FormGroup>
        <FormControlLabel labelPlacement="start" control={<Checkbox checked={value}/>} label={label} onChange={onChange} />
      </FormGroup>
    </Box>
  );
}