import { Pagination as MuiPagination } from "@mui/material";

const Pagination = ({ children, ...props }) => {
  return <MuiPagination {...props}>{children}</MuiPagination>;
};

export default Pagination;
