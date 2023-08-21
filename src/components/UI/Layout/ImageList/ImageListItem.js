import { ImageListItem as MuiImageListItem } from "@mui/material";

const ImageListItem = ({ children, ...props }) => {
  return <MuiImageListItem {...props}>{children}</MuiImageListItem>;
};

export default ImageListItem;
