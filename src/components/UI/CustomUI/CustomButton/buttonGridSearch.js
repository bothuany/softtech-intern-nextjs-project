import IconButton from "@/components/UI/Inputs/Button/IconButton";
import OutlinedInput from "@/components/UI/Inputs/TextField/OutlinedInput";
import MuiIcon from "@/components/UI/MuiIcon";
import { InputAdornment } from "@mui/material";
import styled from "styled-components";

const StyledSearchField = styled(OutlinedInput)`
  &.MuiOutlinedInput-root {
    background: #fff;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #919eab;
  }

  fieldset {
    border: 1px solid rgba(145, 158, 171, 0.32) !important;
    border-radius: 8px;
  }
`;

const ButtonGridSearch = ({
  searchText,
  searchTextFilter,
  handleSearchKeyDown,
  handleSearchTextChanged,
  handleSearchClickEvent,
  handleSearchClearClickEvent,
  placeholder,
}) => {
  return (
    <StyledSearchField
      id="outlined-adornment-search"
      type={"text"}
      // fullWidth={true}
      style={{ width: "400px" }}
      value={searchText ?? ""}
      placeholder={placeholder}
      onKeyDown={handleSearchKeyDown}
      onChange={handleSearchTextChanged}
      startAdornment={
        <InputAdornment position="start">
          <IconButton edge="end" sx={{ m: 1 }} onClick={handleSearchClickEvent}>
            <MuiIcon variation="Search" htmlColor="#919eab" />
          </IconButton>
        </InputAdornment>
      }
      endAdornment={
        searchText?.trim()?.length > 0 ||
        searchTextFilter?.trim()?.length > 0 ? (
          <InputAdornment position="start">
            <IconButton
              aria-label="start search button"
              edge="end"
              sx={{ m: 1 }}
              onClick={handleSearchClearClickEvent}
            >
              <MuiIcon variation="Close" htmlColor="#919eab" />
            </IconButton>
          </InputAdornment>
        ) : (
          <></>
        )
      }
    />
  );
};

export default ButtonGridSearch;
