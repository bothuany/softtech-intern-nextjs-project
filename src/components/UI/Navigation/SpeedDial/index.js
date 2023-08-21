import { SpeedDial as MuiSpeedDial } from "@mui/material";

const SpeedDial = ({ children, ...props }) => {
  return <MuiSpeedDial {...props}>{children}</MuiSpeedDial>;
};

export default SpeedDial;
