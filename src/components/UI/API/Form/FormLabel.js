import { FormLabel as MuiFormLabel } from "@mui/material";

const FormLabel = ({ children, ...props }) => {
  return <MuiFormLabel {...props}>{children}</MuiFormLabel>;
};

export default FormLabel;
