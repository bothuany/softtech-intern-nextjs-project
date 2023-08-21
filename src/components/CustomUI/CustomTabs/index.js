import { useState } from "react";
import styled from "styled-components";
import Box from "../../UI/Layout/Box";
import Tabs from "../../UI/Navigation/Tabs";
import Tab from "../../UI/Navigation/Tabs/Tab";

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const StyledBox = styled(Box)`
  width: 100%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const StyledTab = styled(Tab)`
  &.MuiTab-root.MuiTab-labelIcon.MuiTab-fullWidth {
    display: flex !important;
    flex-direction: row !important;
    gap: 4px !important;
    min-height: auto;
  }
`;

const StyledTabs = styled(Tabs)`
  & .MuiTab-fullWidth {
    padding: 12px 10px !important;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 18px !important;
    text-transform: none !important;
    color: rgba(58, 58, 58, 0.6);
  }

  & .MuiTab-fullWidth:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 25%;
    height: 50%;
    border-left: 1px solid #c4c4c4;
  }

  & .MuiTab-fullWidth.Mui-selected:after,
  & .MuiTab-fullWidth:first-child:after {
    content: none;
  }

  & .MuiTab-fullWidth.Mui-selected {
    padding: 12px 10px !important;
    background: #084bbb !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 18px !important;
    text-transform: none !important;
    color: #ffffff !important;
  }

  & .MuiTab-fullWidth.Mui-selected svg {
    fill: red;
  }

  & .MuiTab-fullWidth:first-child {
    padding: 12px 10px !important;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid #c4c4c4;
    border-left: 1px solid #c4c4c4;

    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 18px !important;
    text-transform: none !important;
    color: rgba(58, 58, 58, 0.6);
  }

  & .MuiTab-fullWidth:last-child {
    padding: 12px 10px !important;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;

    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 15px !important;
    line-height: 18px !important;
    text-transform: none !important;
    color: rgba(58, 58, 58, 0.6);
  }

  & .MuiTabs-indicator {
    display: none;
  }
`;

const CustomTabs = ({ options, setSelectedtab }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelectedtab(newValue);
  };

  return (
    <TabsWrapper>
      <StyledBox>
        <StyledTabs value={value} onChange={handleChange} variant="fullWidth">
          {options &&
            options.map((option, index) => (
              <StyledTab
                key={index}
                label={option.label}
                icon={
                  value + 1 == option.id ? option.selectedIcon : option.icon
                }
                disabled={option?.disabled}
              />
            ))}
        </StyledTabs>
      </StyledBox>
    </TabsWrapper>
  );
};

export default CustomTabs;
