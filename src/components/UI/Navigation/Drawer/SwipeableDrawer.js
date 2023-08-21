import { SwipeableDrawer as MuiSwipeableDrawer } from "@mui/material";

const SwipeableDrawer = ({ children, ...props }) => {
  return <MuiSwipeableDrawer {...props}>{children}</MuiSwipeableDrawer>;
};

export default SwipeableDrawer;
