import { Rating as MuiRating } from "@mui/material";

const Rating = ({ children, ...props }) => {
  return <MuiRating {...props}>{children}</MuiRating>;
};

export default Rating;
