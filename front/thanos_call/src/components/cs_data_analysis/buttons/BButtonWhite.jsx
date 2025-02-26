import React from "react"

const BButtonWhite = ({ text = "알아서", onClick }) => {
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
    border: "2px solid #1E90FF",
    color: "#888888",
    padding: "8px 22px",
    borderRadius: "9999px",
    backgroundColor: "#FFFFFF",
    fontSize: "16px",
    cursor: "pointer",
  },
}

export default BButtonWhite
