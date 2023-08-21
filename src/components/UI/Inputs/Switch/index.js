import { Switch as MuiSwitch } from "@mui/material";

const Switch = ({ children, ...props }) => {
  return <MuiSwitch {...props}>{children}</MuiSwitch>;
};

export default Switch;
