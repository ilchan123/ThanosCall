import React from "react"
import { STRINGS } from "../../config/string"
const CSBackkey = ({ onBack }) => {
  return (
    <div style={styles.header}>
      <button style={styles.backButton} onClick={onBack}>
        {STRINGS.BASIC_FRAME.CS_HEADER.BACK_KEY}
      </button>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: "var(--blue500)",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
  },
  backButton: {
    fontFamily: "Pretendard-medium",
    fontWeight: "300",
    fontSize: "16px",
    backgroundColor: "var(--white)",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    cursor: "pointer",
  },
}

export default CSBackkey
