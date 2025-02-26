import React from "react"
import { STRINGS } from "../../../config/string"

const SButtonWhite = ({
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
    padding: "8px 16px",
    border: "1px solid var(--blue300)",
    borderRadius: "9999px",
    backgroundColor: "var(--white)",
    color: "var(--gray600)",
    fontSize: "14px",
    cursor: "pointer",
  },
}

export default SButtonWhite
