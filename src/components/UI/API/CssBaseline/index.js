import { CssBaseline as MuiCssBaseline } from "@mui/material";

const CssBaseline = ({ children, ...props }) => {
  return <MuiCssBaseline {...props}>{children}</MuiCssBaseline>;
};

export default CssBaseline;
