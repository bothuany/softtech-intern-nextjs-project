import { Checkbox as MuiCheckbox } from "@mui/material";
import FormControlLabel from "../../API/Form/FormControlLabel";

const Checkbox = ({ ...props }) => {
  return (
    <FormControlLabel
      control={<MuiCheckbox {...props} />}
      label={props.label}
      disabled={props.disabled}
    />
  );
};

export default Checkbox;
