import { TableContainer as MuiTableContainer } from "@mui/material";
import { forwardRef } from "react";

const TableContainer = forwardRef(({ children, ...props }, ref) => (
  <MuiTableContainer {...props} ref={ref}>
    {children}
  </MuiTableContainer>
));

TableContainer.displayName = "TableContainer";

export default TableContainer;
