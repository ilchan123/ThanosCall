import React from "react"
import CallActionButton from "./call_action_button"

const CallActionGroup = () => {
  return (
    <div style={styles.container}>
      <CallActionButton type="accept" onClick={() => alert("Call Accepted!")} />
      <CallActionButton
        type="decline"
        onClick={() => alert("Call Declined!")}
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
