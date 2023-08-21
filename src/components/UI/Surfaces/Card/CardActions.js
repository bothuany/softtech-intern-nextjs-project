import { CardActions as MuiCardActions } from "@mui/material";

const CardActions = ({ children, ...props }) => {
  return <MuiCardActions {...props}>{children}</MuiCardActions>;
};

export default CardActions;
