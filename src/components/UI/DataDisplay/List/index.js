import { List as MuiList } from "@mui/material";

const List = ({ children, ...props }) => {
  return <MuiList {...props}>{children}</MuiList>;
};

export default List;
