import { ButtonGroup as MuiButtonGroup } from "@mui/material";

const ButtonGroup = ({ children, ...props }) => {
  return <MuiButtonGroup {...props}>{children}</MuiButtonGroup>;
};

export default ButtonGroup;
