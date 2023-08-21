import { TableRow as MuiTableRow } from "@mui/material";

const TableRow = ({ children, ...props }) => {
  return <MuiTableRow {...props}>{children}</MuiTableRow>;
};

export default TableRow;