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

const CustomTableDetailButton = ({ text, ...props }) => {
  return (
    <Button
      sx={{
        background: "#1890FF",
        "&:hover": {
          background: "#1890FF",
          opacity: "0.8",
        },
        borderRadius: "8px",
        textTransform: "none",
      }}
      {...props}
    >
      <StyledText>{text}</StyledText>
    </Button>
  );
};
export default CustomTableDetailButton;
