import React from "react"

const SButtonWhite = ({ text = "알아서", onClick }) => {
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
    border: "1px solid #1E90FF",
    borderRadius: "9999px",
    backgroundColor: "#FFFFFF",
    color: "#888888",
    fontSize: "14px",
    cursor: "pointer",
  },
}

export default SButtonWhite
