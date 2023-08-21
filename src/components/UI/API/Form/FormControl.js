import { FormControl as MuiFormControl } from "@mui/material";

const FormControl = ({ children, ...props }) => {
  return <MuiFormControl {...props}>{children}</MuiFormControl>;
};

export default FormControl;
