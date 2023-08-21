import { Collapse as MuiCollapse } from "@mui/material";

const Collapse = ({ children, ...props }) => {
  return <MuiCollapse {...props}>{children}</MuiCollapse>;
};

export default Collapse;
