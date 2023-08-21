import { IconButton as MuiIconButton } from "@mui/material";

const IconButton = ({ children, ...props }) => {
  return <MuiIconButton {...props}>{children}</MuiIconButton>;
};

export default IconButton;
