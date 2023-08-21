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

const ButtonInfo = ({ ...props }) => {
  return (
    <Button
      sx={{
        background: "#1890FF",
        boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
        borderRadius: "8px",
        "&:hover": {
          background: "#1890FF",
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
export default ButtonInfo;
