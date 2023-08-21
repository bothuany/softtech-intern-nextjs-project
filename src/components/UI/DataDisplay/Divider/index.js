import { Divider as MuiDivider } from "@mui/material";

const Divider = ({ children, ...props }) => {
  return <MuiDivider {...props}>{children}</MuiDivider>;
};

export default Divider;
