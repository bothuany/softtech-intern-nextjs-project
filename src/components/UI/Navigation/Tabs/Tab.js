import { Tab as MuiTab } from "@mui/material";

const Tab = ({ children, ...props }) => {
  return <MuiTab {...props}>{children}</MuiTab>;
};

export default Tab;
