import TableCell from "@/components/UI/DataDisplay/Table/TableCell";
import { tableCellClasses } from "@mui/material";
import styled from "styled-components";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F6F8",
    color: "#637381",
    borderBottom: "none",
    lineHeight: 1,
    padding: "20px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: "none",
    lineHeight: "16px",
    padding: "20px",
    minHeight: "74px",
  },
}));

const CustomTableCell = ({ children, ...props }) => {
  return <StyledTableCell {...props}>{children}</StyledTableCell>;
};

export default CustomTableCell;
