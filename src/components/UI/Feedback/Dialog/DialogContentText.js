import { DialogContentText as MuiDialogContentText } from "@mui/material";

const DialogContentText = ({ children, ...props }) => {
  return <MuiDialogContentText {...props}>{children}</MuiDialogContentText>;
};

export default DialogContentText;
