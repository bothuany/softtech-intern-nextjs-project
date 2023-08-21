import { Input as MuiInput } from "@mui/material";

const Input = ({ children, ...props }) => {
  return <MuiInput {...props}>{children}</MuiInput>;
};

export default Input;
