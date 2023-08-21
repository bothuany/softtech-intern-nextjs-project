import { Slider as MuiSlider } from "@mui/material";

const Slider = ({ children, ...props }) => {
  return <MuiSlider {...props}>{children}</MuiSlider>;
};

export default Slider;
