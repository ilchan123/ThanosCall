import React from "react"
import { Outlet } from "react-router-dom"
import BtnGrpDF from "./buttons/BtnGrpDF"

const CSListManage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.fullWidth}>
        <BtnGrpDF />
        <div style={styles.chartContainer}>
          <Outlet />
        </div>
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
  chartContainer: {
    width: "100%",
    height: "80%",
    // padding: "20px",
    backgroundColor: "var(--blue500)",
    borderRadius: "8px",
    marginTop: "5px",
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
