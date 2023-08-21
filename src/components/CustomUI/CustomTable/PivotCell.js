import Typography from "@/components/UI/DataDisplay/Typography";
import styled from "styled-components";

const StyledPivotCell = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #212b36;
`;

const PivotCell = ({ children, ...props }) => {
  return <StyledPivotCell {...props}>{children}</StyledPivotCell>;
};

export default PivotCell;
