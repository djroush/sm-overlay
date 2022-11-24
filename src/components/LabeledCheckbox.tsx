import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

export type LabeledCheckboxProps = CheckboxProps & {
  label: string,
  value: boolean,
  onChange: (event: React.SyntheticEvent, checked: boolean) => void
}

export default function LabeledCheckbox(props: LabeledCheckboxProps) {
  const { disabled, label, value, onChange } = { ...props }
  return (
      <FormGroup>
        <FormControlLabel labelPlacement="start" control={<Checkbox disabled={disabled} checked={value}/>} label={label} onChange={onChange} />
      </FormGroup>
  );
}