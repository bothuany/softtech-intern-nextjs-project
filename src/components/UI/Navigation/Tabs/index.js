import { Tabs as MuiTabs } from "@mui/material";

const Tabs = ({ children, ...props }) => {
  return <MuiTabs {...props}>{children}</MuiTabs>;
};

export default Tabs;
