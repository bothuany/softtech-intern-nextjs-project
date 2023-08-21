import { Grid2 as MuiGrid2 } from "@mui/material/Unstable_Grid2";

const Grid2 = ({ children, ...props }) => {
  return <MuiGrid2 {...props}>{children}</MuiGrid2>;
};

export default Grid2;
