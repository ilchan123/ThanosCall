import React from "react"

const BButtonColored = ({ text = "알아서", onClick }) => {
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
    fontSize: "16px",
    padding: "10px 24px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
  },
}

export default BButtonColored
