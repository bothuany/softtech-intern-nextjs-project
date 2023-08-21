import { SpeedDialAction as MuiSpeedDialAction } from "@mui/material";

const SpeedDialAction = ({ children, ...props }) => {
  return <MuiSpeedDialAction {...props}>{children}</MuiSpeedDialAction>;
};

export default SpeedDialAction;
