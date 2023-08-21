import { ToggleButtonGroup as MuiToggleButtonGroup } from "@mui/material";

const ToggleButtonGroup = ({ children, ...props }) => {
  return <MuiToggleButtonGroup {...props}>{children}</MuiToggleButtonGroup>;
};

export default ToggleButtonGroup;
