import React from "react"
import { STRINGS } from "../../../config/string"

const BButtonColored = ({
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
    fontSize: "16px",
    padding: "10px 24px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
  },
}

export default BButtonColored
