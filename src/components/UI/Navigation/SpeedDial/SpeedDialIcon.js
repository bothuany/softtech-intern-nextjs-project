import { SpeedDialIcon as MuiSpeedDialIcon } from "@mui/material";

const SpeedDialIcon = ({ children, ...props }) => {
  return <MuiSpeedDialIcon {...props}>{children}</MuiSpeedDialIcon>;
};

export default SpeedDialIcon;
