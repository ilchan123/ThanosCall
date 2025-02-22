import React from "react"
import SearchableOrderDetails from "./SearchableOrderDetails"
import SearchableQAList from "./SearchableQAList"

const SearchableDashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.box}>
          <SearchableOrderDetails />
        </div>
        <div style={styles.box}>
          <SearchableQAList />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: "relative",
    Right: "1500px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  searchRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  box: {
    flex: "1",
    borderRadius: "10px",
  },
}

export default SearchableDashboard
