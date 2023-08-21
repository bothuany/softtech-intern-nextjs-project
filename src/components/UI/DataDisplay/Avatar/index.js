import { Avatar as MuiAvatar } from "@mui/material";

const Avatar = ({ children, ...props }) => {
  return <MuiAvatar {...props}>{children}</MuiAvatar>;
};

export default Avatar;
