import { Link as MuiLink } from "@mui/material";

const Link = ({ children, ...props }) => {
  return <MuiLink {...props}>{children}</MuiLink>;
};

export default Link;
