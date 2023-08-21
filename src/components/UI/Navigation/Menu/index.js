import { Menu as MuiMenu } from "@mui/material";

const Menu = ({ children, ...props }) => {
  return <MuiMenu {...props}>{children}</MuiMenu>;
};

export default Menu;
