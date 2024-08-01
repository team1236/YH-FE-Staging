import React, { useState } from "react";
import {
  Popover,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClearIcon from "@mui/icons-material/Clear";

const CustomRadio = styled(Radio)({
  "&.Mui-checked": {
    color: "#4c3f90",
  },
});

const CustomCheckbox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "#4c3f90",
  },
});

const ListingFilter = ({ selectedFilters, setSelectedFilters }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleClick = (event, filter) => {
    setAnchorEl(event.currentTarget);
    setCurrentFilter(filter);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentFilter(null);
  };

  const handleSelect = (filterType, option) => {
    const existingFilter = selectedFilters.find(
      (filter) => filter.filterType === filterType && filter.option === option
    );

    if (existingFilter) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== existingFilter)
      );
    } else {
      if (filters[filterType].type === "radio") {
        setSelectedFilters([
          ...selectedFilters.filter(
            (filter) => filter.filterType !== filterType
          ),
          { filterType, option },
        ]);
      } else if (filters[filterType].type === "search") {
        setSelectedFilters([
          ...selectedFilters.filter(
            (filter) => filter.filterType !== filterType
          ),
          { filterType, option: searchText },
        ]);
      } else {
        setSelectedFilters([...selectedFilters, { filterType, option }]);
      }
    }
  };

  const handleRemoveFilter = (option) => {
    setSelectedFilters(
      selectedFilters.filter((filter) => filter.option !== option)
    );
  };

  const open = Boolean(anchorEl);

  const filters = {
    recommended: {
      type: "radio",
      options: ["Recommended", "Top Rated", "Best View", "Sea Facing"],
    },
    price: { type: "radio", options: ["Low to High", "High to Low"] },
    star_category: {
      type: "checkbox",
      options: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    },
    guest_rating: {
      type: "checkbox",
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    location: { type: "search", options: [] },
  };

  const renderFilterOptions = (filter) => {
    const { type, options } = filters[filter];
    if (type === "radio") {
      return (
        <RadioGroup>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={
                <CustomRadio
                  checked={selectedFilters.some(
                    (selected) => selected.option === option
                  )}
                />
              }
              label={option}
              onClick={() => handleSelect(filter, option)}
            />
          ))}
        </RadioGroup>
      );
    } else if (type === "checkbox") {
      return (
        <FormGroup>
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              control={
                <CustomCheckbox
                  checked={selectedFilters.some(
                    (selected) => selected.option === option
                  )}
                  onChange={() => handleSelect(filter, option)}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      );
    } else if (type === "search") {
      return (
        <input
          type="search"
          placeholder="Search location..."
          className="filter-location-search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={() => handleSelect(filter, searchText)}
        />
      );
    }
  };

  return (
    <>
      <div className="filter-row">
        <div className="filter-drop filter-text">
          <h5>All Filters</h5>
        </div>
        <div
          className="filter-drop"
          onClick={(e) => handleClick(e, "recommended")}
        >
          <h6>
            Sort by : Recommended <KeyboardArrowDownIcon />
          </h6>
        </div>
        <div className="filter-drop" onClick={(e) => handleClick(e, "price")}>
          <h6>
            Filter by Price <KeyboardArrowDownIcon />
          </h6>
        </div>
        <div
          className="filter-drop"
          onClick={(e) => handleClick(e, "star_category")}
        >
          <h6>
            Star Category <KeyboardArrowDownIcon />
          </h6>
        </div>
        <div
          className="filter-drop"
          onClick={(e) => handleClick(e, "guest_rating")}
        >
          <h6>
            Guest Rating <KeyboardArrowDownIcon />
          </h6>
        </div>
        <div
          className="filter-drop"
          onClick={(e) => handleClick(e, "location")}
        >
          <h6>
            Location <KeyboardArrowDownIcon />
          </h6>
        </div>

        {/* <div className="filter-drop filter-search">
          <input
            type="search"
            placeholder="Search location..."
            className="filter-location-search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onBlur={() => handleSelect(filter, searchText)}
          />
        </div> */}

        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          className="filter-popover"
          TransitionComponent={Grow}
        >
          <Typography className="filter-popover-content">
            {currentFilter && renderFilterOptions(currentFilter)}
          </Typography>
        </Popover>
      </div>
      <hr className="mt-4" />
      <div className="searched-filter">
        {selectedFilters.map((filter, index) => (
          <h5 key={index}>
            {filter.option}{" "}
            <ClearIcon onClick={() => handleRemoveFilter(filter.option)} />
          </h5>
        ))}
      </div>
    </>
  );
};

export default ListingFilter;
