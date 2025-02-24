import React, { useState } from "react"
import DateRangePicker from "./date_range_picker"
import DropdownButtonGroup from "./dropdown_buttongrp"
import SearchBox from "./search_box"

const SearchFilterBar = ({ setFilters }) => {
  const [dateRange, setDateRange] = useState(null)
  const [consultant, setConsultant] = useState("")
  const [category, setCategory] = useState("")
  const [status, setStatus] = useState("")
  const [search, setSearch] = useState("")

  const applyFilters = () => {
    setFilters({
      dateRange,
      consultant,
      category,
      status,
      search,
    })
  }

  return (
    <div style={styles.container}>
      <DateRangePicker
        setDateRange={setDateRange}
        applyFilters={applyFilters}
      />
      <DropdownButtonGroup
        setConsultant={setConsultant}
        setCategory={setCategory}
        setStatus={setStatus}
        applyFilters={applyFilters}
      />
      <SearchBox
        style={styles.search}
        setSearch={setSearch}
        applyFilters={applyFilters}
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
  },
  search: {
    marginLeft: "auto",
  },
}

export default SearchFilterBar
