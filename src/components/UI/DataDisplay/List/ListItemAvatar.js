import { ListItemAvatar as MuiListItemAvatar } from "@mui/material";

const ListItemAvatar = ({ children, ...props }) => {
  return <MuiListItemAvatar {...props}>{children}</MuiListItemAvatar>;
};

export default ListItemAvatar;
