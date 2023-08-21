import { Dialog as MuiDialog } from "@mui/material";

const Dialog = ({ children, ...props }) => {
  return <MuiDialog {...props}>{children}</MuiDialog>;
};

export default Dialog;
