import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";

const Breadcrumbs = ({ children, ...props }) => {
  return <MuiBreadcrumbs {...props}>{children}</MuiBreadcrumbs>;
};

export default Breadcrumbs;
