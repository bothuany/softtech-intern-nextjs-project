import { AccordionSummary as MuiAccordionSummary } from "@mui/material";

const AccordionSummary = ({ children, ...props }) => {
  return <MuiAccordionSummary {...props}>{children}</MuiAccordionSummary>;
};

export default AccordionSummary;
