import { Button, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { styled } from "styled-components";
const StyledCleanText = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #212b36;
`;
const StyledInfoText = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #ffffff;
`;
const StyledSuccessText = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #ffffff;
`;
const StyledRejectText = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #ffffff;
`;
const StyledWarningText = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #ffffff;
`;
export default function CustomButton({ type, ...props }) {
  const sx = useMemo(() => {
    switch (type) {
      case "clean":
        return {
          background: "#FFFFFF",
          boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
          borderRadius: "8px",
          "&:hover": {
            background: "#FFFFFF",
            opacity: "0.8",
          },
          textTransform: "none",
          height: "100%",
        };

      case "info":
        return {
          background: "#1890FF",
          boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
          borderRadius: "8px",
          "&:hover": {
            background: "#1890FF",
            opacity: "0.8",
          },
          textTransform: "none",
          height: "100%",
        };
      case "success":
        return {
          background: "#229A16",
          boxShadow: "0px 8px 16px rgba(0, 171, 85, 0.24)",
          borderRadius: "8px",
          "&:hover": {
            background: "#229A16",
            opacity: "0.8",
          },
          textTransform: "none",
          height: "100%",
        };
      case "reject":
        return {
          background: "#DD131F",
          boxShadow: "0px 8px 16px rgba(67, 148, 221, 0.24)",
          borderRadius: "8px",
          "&:hover": {
            background: "#DD131F",
            opacity: "0.8",
          },
          textTransform: "none",
          height: "100%",
        };
      case "warning":
        return {
          background: "#FFC107",
          boxShadow: "0px 8px 16px rgba(67, 148, 221, 0.24)",
          borderRadius: "8px",
          "&:hover": {
            background: "#FFC107",
            opacity: "0.8",
          },
          textTransform: "none",
          height: "100%",
        };
      default:
        return {
          background: "#FFFFFF",
          boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
          borderRadius: "8px",
          "&:hover": {
            background: "#FFFFFF",
            opacity: "0.8",
          },
          textTransform: "none",
          height: "100%",
        };
    }
  }, [type]);

  return (
    <Button sx={sx} {...props}>
      {type === "clean" && <StyledCleanText>{props.text}</StyledCleanText>}
      {type === "info" && <StyledInfoText>{props.text}</StyledInfoText>}
      {type === "success" && (
        <StyledSuccessText>{props.text}</StyledSuccessText>
      )}
      {type === "reject" && <StyledRejectText>{props.text}</StyledRejectText>}
      {type === "warning" && (
        <StyledWarningText>{props.text}</StyledWarningText>
      )}
    </Button>
  );
}
