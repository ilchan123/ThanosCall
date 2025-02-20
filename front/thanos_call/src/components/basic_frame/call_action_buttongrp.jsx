import React, { useState } from "react"
import CallActionButton from "./call_action_button"

const CallActionGroup = () => {
  // 상태 추가
  const [clickedType, setClickedType] = useState(null)

  return (
    <div style={styles.container}>
      <CallActionButton
        type="accept"
        isClicked={clickedType === "accept"}
        onClick={() => setClickedType("accept")}
      />
      <CallActionButton
        type="decline"
        isClicked={clickedType === "decline"}
        onClick={() => setClickedType("decline")}
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
  },
}

export default CallActionGroup
