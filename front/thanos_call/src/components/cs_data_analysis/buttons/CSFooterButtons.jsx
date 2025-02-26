import React from "react"
import { STRINGS } from "../../../config/string"

const CSFooterButtons = ({ onReplay }) => {
  return (
    <div style={styles.container}>
      <button style={styles.replayButton} onClick={onReplay}>
        <span style={styles.iconWrapper}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        {STRINGS.CS_DATA_ANALYSIS.BUTTONS.VOICE_PLAY}
      </button>
    </div>
  )
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  replayButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "transparent",
    color: "var(--black100)",
    padding: "8px 16px",
    borderRadius: "20px",
    fontSize: "16px",
    border: "2px solid var(--gray400)",
    cursor: "pointer",
    fontWeight: "bold",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "22px",
    height: "22px",
    backgroundColor: "var(--blue500)",
    borderRadius: "50%",
  },
}

export default CSFooterButtons
