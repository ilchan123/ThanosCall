import React from "react"
import LogoLetter from "../../assets/images/Logo_letter_finger.svg"
// import SearchableDashboard from "../boxes/SearchableDashboard"

const CSHeader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topRight}>
        <img src={LogoLetter} alt="Logo" style={styles.logo} />
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.leftBox}>{/* <SearchableDashboard /> */}</div>
        <div style={styles.rightBox}></div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "100vhs",
    backgroundColor: "var(--blue500)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "150px",
    position: "relative",
  },
  topRight: {
    position: "absolute",
    top: "-90px",
    right: "30px",
  },
  logo: {
    width: "300px",
    height: "300px",
    objectFit: "contain",
  },
  contentWrapper: {
    display: "flex",
    maxWidth: "1200px",
    width: "100%",
    justifyContent: "space-between",
    gap: "20px",
  },
  leftBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  rightBox: {
    flex: 1,
  },
}

export default CSHeader
