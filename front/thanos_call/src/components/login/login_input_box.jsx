import React from "react"

const LoginInput = ({ placeholder, type = "text", value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={styles.input}
    />
  )
}

const styles = {
  input: {
    width: "360px",
    height: "54px",
    padding: "12px",
    fontSize: "16px",
    textAlign: "left",
    marginBottom: "12px",
    border: "1px solid var(--gray350)",
    borderRadius: "6px",
    backgroundColor: "var(--bluegray)",
    color: "var(--gray600)",
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  },
}

export default LoginInput
