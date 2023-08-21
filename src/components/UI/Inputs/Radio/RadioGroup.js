import { RadioGroup as MuiRadioGroup } from "@mui/material";

const RadioGroup = ({ children, ...props }) => {
  return <MuiRadioGroup {...props}>{children}</MuiRadioGroup>;
};

export default RadioGroup;
