import { Card as MuiCard } from "@mui/material";

const Card = ({ children, ...props }) => {
  return <MuiCard {...props}>{children}</MuiCard>;
};

export default Card;
