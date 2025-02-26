import React from "react"

const SButtonColored = ({ text = "알아서", onClick }) => {
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
    backgroundColor: "#1E90FF",
    color: "#FFFFFF",
    fontSize: "14px",
    padding: "8px 16px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
  },
}

export default SButtonColored
