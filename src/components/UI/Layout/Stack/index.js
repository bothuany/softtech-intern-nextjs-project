import { Stack as MuiStack } from "@mui/material";

const Stack = ({ children, ...props }) => {
  return <MuiStack {...props}>{children}</MuiStack>;
};

export default Stack;
