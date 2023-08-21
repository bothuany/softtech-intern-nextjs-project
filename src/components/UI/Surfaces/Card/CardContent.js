import { CardContent as MuiCardContent } from "@mui/material";

const CardContent = ({ children, ...props }) => {
  return <MuiCardContent {...props}>{children}</MuiCardContent>;
};

export default CardContent;
