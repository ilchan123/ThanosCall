import React from "react"
import SearchableDashboard from "../boxes/SearchableDashboard"

const CSListManage = () => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.tableContainer, ...styles.fullWidth }}>
        <SearchableDashboard />
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "var(--blue500)",
    padding: "30px",
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
