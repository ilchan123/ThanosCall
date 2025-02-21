import React from "react"
import DataFrame from "./data_frame"
import SearchFilterBar from "./search_filter_bar"

const CSListManage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.fullWidth}>
        <SearchFilterBar />
      </div>
      <div style={{ ...styles.tableContainer, ...styles.fullWidth }}>
        <DataFrame collectionName="order" />
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "var(--blue500)",
    padding: "10px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  fullWidth: {
    width: "100%",
  },
  tableContainer: {
    width: "100%",
    height: "500px",
  },
}

export default CSListManage
