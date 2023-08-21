import * as Muicon from "@mui/icons-material";

const MuiIcon = ({ variation, ...rest }) => {
  const IconName = Muicon[variation];
  return IconName ? <IconName {...rest} /> : null;
};

export default MuiIcon;
