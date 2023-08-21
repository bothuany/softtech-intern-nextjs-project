import Tooltip from "@/components/UI/DataDisplay/Tooltip";
import IconButton from "@/components/UI/Inputs/Button/IconButton";
import MuiIcon from "@/components/UI/MuiIcon";

const IconButtonTooltipInfo = ({ tooltip }) => {
  return (
    <Tooltip title={tooltip} placement="top">
      <IconButton>
        <MuiIcon variation={"InfoOutlined"} htmlColor="#D0D1D2" />
      </IconButton>
    </Tooltip>
  );
};

export default IconButtonTooltipInfo;
