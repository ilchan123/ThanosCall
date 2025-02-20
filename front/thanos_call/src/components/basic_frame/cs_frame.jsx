import React from "react"
import CSSideBar from "./cs_sidebar"
import CSHeader from "./cs_header"

const CSFrame = () => {
  return (
    <div style={styles.container}>
      <CSSideBar />

      <CSHeader />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
}

export default CSFrame
