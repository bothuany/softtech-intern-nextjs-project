import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const PivotCellAdjust = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default PivotCellAdjust;
