import { TableHead as MuiTableHead } from "@mui/material";

const TableHead = ({ children, ...props }) => {
  return <MuiTableHead {...props}>{children}</MuiTableHead>;
};

export default TableHead;