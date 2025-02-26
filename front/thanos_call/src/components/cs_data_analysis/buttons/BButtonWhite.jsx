import React from "react"
import { STRINGS } from "../../../config/string"

const BButtonWhite = ({
  text = STRINGS.CS_DATA_ANALYSIS.BUTTONS.TEXT,
  onClick,
}) => {
  return (
    <button style={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

const styles = {
  button: {
    fontFamily: "Pretendard-medium",
    fontWeight: "600",
    border: "2px solid var(--blue300)",
    color: "var(--gray600)",
    padding: "8px 22px",
    borderRadius: "9999px",
    backgroundColor: "var(--white)",
    fontSize: "16px",
    cursor: "pointer",
  },
}

export default BButtonWhite
