import { LinearProgress as MuiLinearProgress } from "@mui/material";

const LinearProgress = ({ children, ...props }) => {
  return <MuiLinearProgress {...props}>{children}</MuiLinearProgress>;
};

export default LinearProgress;
