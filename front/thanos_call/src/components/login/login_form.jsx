import React from "react"
import LoginButton from "./login_button_box"
import LoginInput from "./login_input_box"
import { STRINGS } from "../../config/string"
const LoginForm = () => {
  return (
    <div style={styles.container}>
      <LoginInput
        placeholder={STRINGS.LOGIN_FRAME.LOGIN_INTERFACE.PLACEHOLDER}
      />
      <LoginInput
        placeholder={STRINGS.LOGIN_FRAME.LOGIN_INTERFACE.PASSWORD}
        type="password"
      />
      <LoginButton />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "360px",
  },
}

export default LoginForm
