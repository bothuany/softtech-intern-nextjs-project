import { FormControlLabel as MuiFormControlLabel } from "@mui/material";

const FormControlLabel = ({ children, ...props }) => {
  return <MuiFormControlLabel {...props}>{children}</MuiFormControlLabel>;
};

export default FormControlLabel;
