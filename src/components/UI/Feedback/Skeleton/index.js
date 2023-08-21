import { Skeleton as MuiSkeleton } from "@mui/material";

const Skeleton = ({ children, ...props }) => {
  return <MuiSkeleton {...props}>{children}</MuiSkeleton>;
};

export default Skeleton;
