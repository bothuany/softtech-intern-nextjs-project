import { Select as MuiSelect } from "@mui/material";

const Select = ({ children, ...props }) => {
  return <MuiSelect {...props}>{children}</MuiSelect>;
};

export default Select;