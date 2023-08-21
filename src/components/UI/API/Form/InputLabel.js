import { InputLabel as MuiInputLabel } from "@mui/material";

const InputLabel = ({ children, ...props }) => {
  return <MuiInputLabel {...props}>{children}</MuiInputLabel>;
};

export default InputLabel;
