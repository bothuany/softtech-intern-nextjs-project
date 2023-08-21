import { ListItemButton as MuiListItemButton } from "@mui/material";

const ListItemButton = ({ children, ...props }) => {
  return <MuiListItemButton {...props}>{children}</MuiListItemButton>;
};

export default ListItemButton;
