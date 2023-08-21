import { Chip as MuiChip } from "@mui/material";

const Chip = ({ children, ...props }) => {
  return <MuiChip {...props}>{children}</MuiChip>;
};

export default Chip;
