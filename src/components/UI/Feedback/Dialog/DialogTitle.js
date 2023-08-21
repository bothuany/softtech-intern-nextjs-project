import { DialogTitle as MuiDialogTitle } from "@mui/material";

const DialogTitle = ({ children, ...props }) => {
  return <MuiDialogTitle {...props}>{children}</MuiDialogTitle>;
};

export default DialogTitle;
