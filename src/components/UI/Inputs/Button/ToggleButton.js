import { ToggleButton as MuiToggleButton } from "@mui/material";

const ToggleButton = ({ children, ...props }) => {
  return <MuiToggleButton {...props}>{children}</MuiToggleButton>;
};

export default ToggleButton;
