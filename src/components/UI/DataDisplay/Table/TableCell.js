import { TableCell as MuiTableCell } from "@mui/material";

const TableCell = ({ children, ...props }) => {
  return <MuiTableCell {...props}>{children}</MuiTableCell>;
};

export default TableCell;
