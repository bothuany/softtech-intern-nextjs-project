import { Stepper as MuiStepper } from "@mui/material";

const Stepper = ({ children, ...props }) => {
  return <MuiStepper {...props}>{children}</MuiStepper>;
};

export default Stepper;
