import { ImageList as MuiImageList } from "@mui/material";

const ImageList = ({ children, ...props }) => {
  return <MuiImageList {...props}>{children}</MuiImageList>;
};

export default ImageList;
