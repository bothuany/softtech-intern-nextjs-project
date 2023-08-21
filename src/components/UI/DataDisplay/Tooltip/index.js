import { Tooltip as MuiTooltip } from "@mui/material";

const Tooltip = ({ children, ...props }) => {
  return <MuiTooltip {...props}>{children}</MuiTooltip>;
};

export default Tooltip;
