import React from "react"
import { STRINGS } from "../../../config/string"

const SButtonColored = ({
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
    backgroundColor: "var(--blue300)",
    color: "var(--white)",
    fontSize: "14px",
    padding: "8px 16px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
  },
}

export default SButtonColored
