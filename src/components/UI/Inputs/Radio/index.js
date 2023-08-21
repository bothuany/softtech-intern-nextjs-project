import { Radio as MuiRadio } from "@mui/material";

const Radio = ({ children, ...props }) => {
  return <MuiRadio {...props}>{children}</MuiRadio>;
};

export default Radio;
