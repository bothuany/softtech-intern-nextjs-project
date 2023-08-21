import { ListItemText as MuiListItemText } from "@mui/material";

const ListItemText = ({ children, ...props }) => {
  return <MuiListItemText {...props}>{children}</MuiListItemText>;
};

export default ListItemText;
