import { Toolbar as MuiToolbar } from "@mui/material";

const Toolbar = ({ children, ...props }) => {
  return <MuiToolbar {...props}>{children}</MuiToolbar>;
};

export default Toolbar;
