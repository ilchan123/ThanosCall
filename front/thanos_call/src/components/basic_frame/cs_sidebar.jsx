import React from "react"
import CSProfileCard from "./cs_profilecard"
import CSButtonGroup from "./cs_buttongrp"
import CallActionGroup from "./call_action_buttongrp"
import Logo from "../../assets/images/Logo_Thanos_white.svg"

const CSSideBar = () => {
  return (
    <div style={styles.container}>
      <img style={styles.logoimage} src={Logo} alt="Logo" />
      <CSButtonGroup style={styles.buttonGroup} />
      <CSProfileCard />
      <CallActionGroup />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "var(--blue300)",
    paddingTop: "30px",
    gap: "20px",
    width: "310px",
    minWidth: "290px",
  },
  logoimage: {
    width: "210px",
    height: "70px",
    objectFit: "contain",
  },
  buttonGroup: {
    marginBottom: "30px",
  },
}

export default CSSideBar
