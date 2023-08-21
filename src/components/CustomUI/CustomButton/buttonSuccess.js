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

const ButtonSuccess = ({ ...props }) => {
  return (
    <Button
      sx={{
        background: "#229A16",
        boxShadow: "0px 8px 16px rgba(0, 171, 85, 0.24)",
        borderRadius: "8px",
        "&:hover": {
          background: "#229A16",
          opacity: "0.8",
        },
        textTransform: "none",
        height: '100%'
      }}
      {...props}
    >
      <StyledText>{props.text}</StyledText>
    </Button>
  );
};
export default ButtonSuccess;
