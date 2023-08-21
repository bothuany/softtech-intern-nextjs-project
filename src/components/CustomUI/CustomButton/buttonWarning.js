import Typography from "@/components/UI/DataDisplay/Typography";
import Button from "@/components/UI/Inputs/Button";
import styled from "styled-components";

const StyledText = styled(Typography)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #ffffff;
`;

const ButtonWarning = ({ ...props }) => {
  return (
    <Button
      sx={{
        background: "#FFC107",
        boxShadow: "0px 8px 16px rgba(67, 148, 221, 0.24)",
        borderRadius: "8px",
        "&:hover": {
          background: "#FFC107",
          opacity: "0.8",
        },
        textTransform: "none",
      }}
      {...props}
    >
      <StyledText>{props.text}</StyledText>
    </Button>
  );
};
export default ButtonWarning;
