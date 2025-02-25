import React, { useState } from "react"
import CallActionButton from "./call_action_button"

const CallActionGroup = ({ setIsUploadModalOpen }) => {
  const [activeButton, setActiveButton] = useState(null)

  const handleButtonClick = (type) => {
    setActiveButton(type)
    if (type === "accept") {
      setIsUploadModalOpen(true)
    }

    setTimeout(() => {
      setActiveButton(null)
    }, 300)
  }

  return (
    <div style={styles.container}>
      <CallActionButton
        type="accept"
        isClicked={activeButton === "accept"}
        onClick={() => handleButtonClick("accept")}
      />
      <CallActionButton
        type="decline"
        isClicked={activeButton === "decline"}
        onClick={() => handleButtonClick("decline")}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    backgroundColor: "var(--blue300)",
    padding: "10px",
    borderRadius: "10px",
    position: "relative",
  },
}

export default CallActionGroup
