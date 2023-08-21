import { Fab as MuiFab } from "@mui/material";

const Fab = ({ children, ...props }) => {
  return <MuiFab {...props}>{children}</MuiFab>;
};

export default Fab;
