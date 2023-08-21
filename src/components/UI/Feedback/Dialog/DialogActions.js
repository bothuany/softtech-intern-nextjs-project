import { DialogActions as MuiDialogActions } from "@mui/material";

const DialogActions = ({ children, ...props }) => {
  return <MuiDialogActions {...props}>{children}</MuiDialogActions>;
};

export default DialogActions;
