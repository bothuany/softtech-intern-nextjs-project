import { Snackbar as MuiSnackbar } from "@mui/material";

const Snackbar = ({ children, ...props }) => {
  return <MuiSnackbar {...props}> {children}</MuiSnackbar>;
};

export default Snackbar;
