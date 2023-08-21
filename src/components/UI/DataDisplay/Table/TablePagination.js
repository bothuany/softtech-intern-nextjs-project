import { TablePagination as MuiTablePagination } from "@mui/material";

const TablePagination = ({ children, ...props }) => {
  return <MuiTablePagination {...props}>{children}</MuiTablePagination>;
};

export default TablePagination;
