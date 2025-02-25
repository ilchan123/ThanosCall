import React from "react"
import DataFrame from "../data_frame"

const CSListManage = () => {
  return (
    <div style={styles.container}>
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
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  tableContainer: {
    width: "100%",
    height: "500px",
  },
}

export default CSListManage
