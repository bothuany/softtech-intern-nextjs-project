import styled from "styled-components";
import CustomTableCell from "./CustomTableCell";
import PivotCellAdjust from "./PivotCellAdjust";

const PivotCellHeader = ({ children, ...props }) => {
  return (
    <CustomTableCell
      style={{
        textAlign: "center",
        verticalAlign: "middle",
        minWidth: "120px",
      }}
      {...props}
    >
      <PivotCellAdjust>{children}</PivotCellAdjust>
    </CustomTableCell>
  );
};

export default PivotCellHeader;
