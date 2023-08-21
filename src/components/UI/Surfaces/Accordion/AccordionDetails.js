import { AccordionDetails as MuiAccordionDetails } from "@mui/material";

const AccordionDetails = ({ children, ...props }) => {
  return <MuiAccordionDetails {...props}>{children}</MuiAccordionDetails>;
};

export default AccordionDetails;
