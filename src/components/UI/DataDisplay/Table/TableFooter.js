import { TableFooter as MuiTableFooter } from "@mui/material";

const TableFooter = ({ children, ...props }) => {
  return <MuiTableFooter {...props}>{children}</MuiTableFooter>;
};

export default TableFooter;
