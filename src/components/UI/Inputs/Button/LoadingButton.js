import { LoadingButton as MuiLoadingButton } from "@mui/lab";

const LoadingButton = ({ children, ...props }) => {
  return (
    <MuiLoadingButton {...props}>
      <div>{children}</div>
    </MuiLoadingButton>
  );
};

export default LoadingButton;
