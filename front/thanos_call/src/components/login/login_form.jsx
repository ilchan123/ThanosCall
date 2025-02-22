import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginButton from "../login/login_button_box"
import LoginInput from "../login/login_input_box"
import { loginWithFirestore } from "../../services/authService"
import { STRINGS } from "../../config/string"

const Login_Page = () => {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    const result = await loginWithFirestore(id, password)
    if (result.success) {
      alert(STRINGS.LOGIN_FRAME.LOGIN_FORM.LOGIN_SUCCESS)
      navigate("/call_center")
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
    color: "var(--red100)",
    fontSize: "14px",
    marginBottom: "10px",
  },
}

export default Login_Page
