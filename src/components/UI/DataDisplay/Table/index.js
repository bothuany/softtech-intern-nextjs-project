import { Table as MuiTable } from "@mui/material";

const Table = ({ children, ...props }) => {
  return <MuiTable {...props}>{children}</MuiTable>;
};

export default Table;
