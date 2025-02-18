import React from "react"
import { STRINGS } from "../../config/string"

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {STRINGS.LOGIN_FRAME.LOGIN_BUTTON.LOGIN}
    </button>
  )
}

const styles = {
  button: {
    fontFamily: "Pretendard-medium",
    fontWeight: "300",
    fontSize: "18px",
    width: "360px",
    height: "54px",
    padding: "12px",
    textAlign: "center",
    backgroundColor: "var(--gray700)",
    color: "var(--white)",
    borderRadius: "6px",
    border: "1px solid",
    cursor: "pointer",
    transition: "background 0.2s",
    boxSizing: "border-box",
  },
}

export default LoginButton
