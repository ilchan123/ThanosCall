import React from "react"
import LoginForm from "./login_form"
import Logo from "../../assets/images/Logo_Thanos_color.svg"

const LoginPanel = () => {
  return (
    <div style={styles.container}>
      <img style={styles.logoimage} src={Logo} alt="Logo" />
      <LoginForm />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--white)",
  },
  logoimage: {
    width: "180px",
    height: "70px",
    objectFit: "contain",
    marginBottom: "20px",
  },
}

export default LoginPanel
