import { CircularProgress as MuiCircularProgress } from "@mui/material";

const CircularProgress = ({ children, ...props }) => {
  return <MuiCircularProgress {...props}>{children}</MuiCircularProgress>;
};

export default CircularProgress;