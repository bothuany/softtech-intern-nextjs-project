import { ListItemIcon as MuiListItemIcon } from "@mui/material";

const ListItemIcon = ({ children, ...props }) => {
  return <MuiListItemIcon {...props}>{children}</MuiListItemIcon>;
};

export default ListItemIcon;
