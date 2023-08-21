import { TextField as MuiTextField } from "@mui/material";

const TextField = ({ children, ...props }) => {
  return <MuiTextField {...props}>{children}</MuiTextField>;
};

export default TextField;
