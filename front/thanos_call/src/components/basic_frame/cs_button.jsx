import React from "react"

const CSButton = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={isActive ? styles.activeButton : styles.button}
    >
      {label}
    </button>
  )
}

const styles = {
  button: {
    fontFamily: "Pretendard-medium",
    fontWeight: "500",
    fontSize: "25px",
    width: "270px",
    padding: "18px",
    backgroundColor: "var(--gray200)",
    color: "var(--black100)",
    border: "none",
    borderRadius: "10px 0px 0px 10px",
    textAlign: "center",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
  activeButton: {
    width: "270px",
    padding: "18px",
    backgroundColor: "var(--blue500)",
    color: "var(--white)",
    border: "none",
    borderRadius: "10px 0px 0px 10px",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
    transition: "background 0.2s, color 0.2s",
  },
}

export default CSButton
