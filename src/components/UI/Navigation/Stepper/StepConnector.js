import { StepConnector as MuiStepConnector } from "@mui/material";

const StepConnector = ({ children, ...props }) => {
  return <MuiStepConnector {...props}>{children}</MuiStepConnector>;
};

export default StepConnector;
