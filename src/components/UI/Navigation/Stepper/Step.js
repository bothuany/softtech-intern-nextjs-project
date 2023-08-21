import { Step as MuiStep } from "@mui/material";

const Step = ({ children, ...props }) => {
  return <MuiStep {...props}>{children}</MuiStep>;
};

export default Step;
