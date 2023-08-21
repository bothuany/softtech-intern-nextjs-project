import { FormGroup as MuiFormGroup } from "@mui/material";

const FormGroup = ({ children, ...props }) => {
  return <MuiFormGroup {...props}>{children}</MuiFormGroup>;
};

export default FormGroup;
