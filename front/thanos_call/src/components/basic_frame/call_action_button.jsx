import React from "react"
import blueCallIcon from "../../assets/images/blue_call.svg"
import grayCallIcon from "../../assets/images/gray_call.svg"
import { STRINGS } from "../../config/string"
const CallActionButton = ({ type, isClicked, onClick }) => {
  return (
    <div style={styles.container} onClick={onClick}>
      <div style={{ ...styles.button, opacity: isClicked ? 0.5 : 1 }}>
        <img
          src={
            type === STRINGS.BASIC_FRAME.CALL_ACTION_BUTTON.ACCEPT_SMALL
              ? blueCallIcon
              : grayCallIcon
          }
          alt={type}
          style={styles.icon}
        />
      </div>
      <p style={styles.text}>
        {type === STRINGS.BASIC_FRAME.CALL_ACTION_BUTTON.ACCEPT_SMALL
          ? STRINGS.BASIC_FRAME.CALL_ACTION_BUTTON.ACCEPT
          : STRINGS.BASIC_FRAME.CALL_ACTION_BUTTON.DECLINE}
      </p>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "Pretendard-medium",
    fontWeight: "300",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  button: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "var(--white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "var(--text-box-shadow)",
    transition: "opacity 0.3s ease",
  },
  icon: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    borderRadius: "50%",
  },
  text: {
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "var(--white)",
  },
}

export default CallActionButton
