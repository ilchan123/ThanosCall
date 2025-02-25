import React, { useState } from "react"
import DateRangePicker from "./date_range_picker"
import DropdownButton from "./dropdown_button"
import SearchBox from "./search_box"
import { STRINGS } from "../../config/string"

const SearchFilterBar = ({ setFilters }) => {
  const [selectedConsultant, setSelectedConsultant] = useState("ALL")
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [selectedProgress, setSelectedProgress] = useState("ALL")
  const [searchQuery, setSearchQuery] = useState("")
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null })

  const handleFilterChange = (type, option) => {
    if (type === "consultant") setSelectedConsultant(option)
    if (type === "category") setSelectedCategory(option)
    if (type === "progress") setSelectedProgress(option)

    setFilters({
      consultant: type === "consultant" ? option : selectedConsultant,
      category: type === "category" ? option : selectedCategory,
      progress: type === "progress" ? option : selectedProgress,
      search: searchQuery,
      ...dateRange,
    })
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setFilters({
      consultant: selectedConsultant,
      category: selectedCategory,
      progress: selectedProgress,
      search: query,
      ...dateRange,
    })
  }

  const handleDateChange = (range) => {
    setDateRange(range)
    setFilters({
      consultant: selectedConsultant,
      category: selectedCategory,
      progress: selectedProgress,
      search: searchQuery,
      ...range,
    })
  }

  return (
    <div style={styles.container}>
      <DateRangePicker onApply={handleDateChange} />
      <DropdownButton
        options={[
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.ALL,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CONSULTANTS.CONSULTANT1,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CONSULTANTS.CONSULTANT2,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CONSULTANTS.CONSULTANT3,
        ]}
        onSelect={(option) => handleFilterChange("consultant", option)}
        defaultLabel={STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CONSULTER}
      />
      <DropdownButton
        options={[
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.ALL,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CATEGORIES.CATE1,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CATEGORIES.CATE2,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CATEGORIES.CATE3,
        ]}
        onSelect={(option) => handleFilterChange("category", option)}
        defaultLabel={STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.CATEGORY}
      />
      <DropdownButton
        options={[
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.ALL,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.STATUES.STATUE1,
          STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.STATUES.STATUE2,
        ]}
        onSelect={(option) => handleFilterChange("progress", option)}
        defaultLabel={STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.COMPLETE_CHECK}
      />
      <SearchBox
        placeholder={STRINGS.CS_LIST_MANAGE.SEARCH_FILTER_BAR.SEARCH_INPUT}
        onSearch={handleSearch}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "var(--blue500)",
    borderRadius: "8px",
    height: "80px",
    width: "100%",
    padding: "10px",
    position: "relative",
    zIndex: "10",
  },
}

export default SearchFilterBar
