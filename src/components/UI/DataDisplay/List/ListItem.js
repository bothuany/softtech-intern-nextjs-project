import { ListItem as MuiListItem } from "@mui/material";

const ListItem = ({ children, ...props }) => {
  return <MuiListItem {...props}>{children}</MuiListItem>;
};

export default ListItem;
