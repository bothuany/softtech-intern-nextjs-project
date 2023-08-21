import { OutlinedInput as MuiOutlinedInput } from "@mui/material";

const OutlinedInput = ({ children, ...props }) => {
  return <MuiOutlinedInput {...props}>{children}</MuiOutlinedInput>;
};

export default OutlinedInput;
