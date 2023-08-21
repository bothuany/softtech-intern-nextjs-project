import { Alert as MuiAlert } from "@mui/material";

const Alert = ({ children, ...props }) => {
  return <MuiAlert {...props}>{children}</MuiAlert>;
};

export default Alert;
