import FormControlLabel from "@/components/UI/API/Form/FormControlLabel";
import FormGroup from "@/components/UI/API/Form/FormGroup";
import Switch from "@/components/UI/Inputs/Switch";

const ButtonAutoRefresh = ({
  checked = false,
  onChange,
  children,
  ...props
}) => {
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              defaultChecked
              checked={checked}
              onClick={(item) => {
                onChange(!checked);
              }}
            />
          }
          {...props}
        />
      </FormGroup>
    </>
  );
};

export default ButtonAutoRefresh;
