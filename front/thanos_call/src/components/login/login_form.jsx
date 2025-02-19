import React, { useState } from "react"
import LoginButton from "./login_button_box"
import LoginInput from "./login_input_box"
import { loginWithFirestore } from "../../services/authService"
import { STRINGS } from "../../config/string"

const LoginForm = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleLogin = async () => {
    const result = await loginWithFirestore(id, password)
    if (result.success) {
      console.log("로그인 성공:", result.user)
      const successMessage =
        STRINGS.LOGIN_FRAME.LOGIN_FORM.LOGIN_SUCCESS.replace(
          "{name}",
          result.user.name
        )
      alert(successMessage)
    } else {
      setErrorMessage(result.message)
    }
  }

  return (
    <div style={styles.container}>
      <LoginInput
        placeholder={STRINGS.LOGIN_FRAME.LOGIN_INTERFACE.PLACEHOLDER}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <LoginInput
        placeholder={STRINGS.LOGIN_FRAME.LOGIN_INTERFACE.PASSWORD}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <LoginButton onClick={handleLogin} />
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
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
}

export default LoginForm
