import { Accordion as MuiAccordion } from "@mui/material";

const Accordion = ({ children, ...props }) => {
  return <MuiAccordion {...props}>{children}</MuiAccordion>;
};

export default Accordion;
