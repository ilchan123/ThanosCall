import React, { useState } from "react"

const PlayButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button style={styles.button} onClick={togglePopup}>
        <div style={styles.iconWrapper}>
          <svg
            xmlns="../../assets/images/play_button.svg"
            viewBox="0 0 24 24"
            fill="white"
            style={styles.icon}
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span style={styles.text}>통화 재생</span>
      </button>
      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2 style={styles.title}>통화 재생</h2>
            <button style={styles.closeButton} onClick={togglePopup}>
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  )
}

const styles = {
  button: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "999px",
    marginTop: "3px",
    padding: "5px 5px",
    boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
    cursor: "pointer",
    backgroundColor: "white",
  },
  iconWrapper: {
    width: "20px",
    height: "20px",
    backgroundColor: "#3b82f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  icon: {
    width: "10px",
    height: "10px",
  },
  text: {
    marginLeft: "8px",
    color: "black",
    fontWeight: "500",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popup: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "200px",
    height: "200px",
    borderRadius: "8px",
    border: "2px dashed var(--black100)",
    padding: "20px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "23px",
    fontWeight: "550",
  },
  closeButton: {
    marginTop: "16px",
    padding: "8px 16px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
}

export default PlayButton
