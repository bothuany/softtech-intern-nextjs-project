import { Backdrop as MuiBackdrop } from "@mui/material";

const Backdrop = ({ children, ...props }) => {
  return <MuiBackdrop {...props}>{children}</MuiBackdrop>;
};

export default Backdrop;
