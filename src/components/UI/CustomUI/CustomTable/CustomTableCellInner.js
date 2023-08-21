import styled from "styled-components";

const StyledTableHeaderCellInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomTableCellInner = ({ children }) => {
  return <StyledTableHeaderCellInner>{children}</StyledTableHeaderCellInner>;
};

export default CustomTableCellInner;
