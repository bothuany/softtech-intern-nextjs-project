import { TableBody as MuiTableBody } from "@mui/material";

const TableBody = ({ children, ...props }) => {
  return <MuiTableBody {...props}>{children}</MuiTableBody>;
};

export default TableBody;
