import React from "react"
import LogoLetter from "../../assets/images/Logo_letter_finger.svg"
import CSListManage from "../cs_list_manage/cs_list_manage"
import CSManualCheck from "../cs_list_manage/cs_menual_check"
import CSDataAnalysis from "../cs_list_manage/cs_data_analysis"

const CSHeader = ({ selectedTab }) => {
  const renderContent = () => {
    switch (selectedTab) {
      case "CS_MANAGE":
        return <CSListManage />
      case "CS_MENUAL":
        return <CSManualCheck />
      case "CS_DATA":
        return <CSDataAnalysis />
      default:
        return <CSListManage />
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.topRight}>
        <img src={LogoLetter} alt="Logo" style={styles.logo} />
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.rightBox}>{renderContent()}</div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--blue500)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  topRight: {
    position: "absolute",
    top: "-140px",
    right: "60px",
  },
  logo: {
    width: "350px",
    height: "350px",
    objectFit: "contain",
  },
  contentWrapper: {
    display: "flex",
    width: "95%",
    flex: 1, // 전체 높이 차지
    padding: "30px",
  },
  rightBox: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--blue500)",
    width: "230%",
    minHeight: "800px",
    padding: "20px",
    borderRadius: "10px",
    // marginBottom: "150px",
  },
}

export default CSHeader
