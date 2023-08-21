import { Autocomplete as MuiAutocomplete } from "@mui/material";

const Autocomplete = ({ children, ...props }) => {
  return <MuiAutocomplete {...props}>{children}</MuiAutocomplete>;
};

export default Autocomplete;
