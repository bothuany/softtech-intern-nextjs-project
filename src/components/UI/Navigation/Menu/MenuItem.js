import { MenuItem as MuiMenuItem } from "@mui/material";

const MenuItem = ({ children, ...props }) => {
  return <MuiMenuItem {...props}>{children}</MuiMenuItem>;
};

export default MenuItem;
