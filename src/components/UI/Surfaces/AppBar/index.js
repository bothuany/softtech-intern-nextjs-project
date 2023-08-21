import { AppBar as MuiAppBar } from "@mui/material";

const AppBar = ({ children, ...props }) => {
  return <MuiAppBar {...props}>{children}</MuiAppBar>;
};

export default AppBar;
