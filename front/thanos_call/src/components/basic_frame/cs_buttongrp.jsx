import React from "react"
import CSButton from "./cs_button"
import { STRINGS } from "../../config/string"

const CSButtonGroup = ({ setSelectedTab, selectedTab }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <CSButton
          label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_MANAGE}
          isActive={selectedTab === "CS_MANAGE"}
          onClick={() => setSelectedTab("CS_MANAGE")}
        />
        <CSButton
          label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_MENUAL}
          isActive={selectedTab === "CS_MENUAL"}
          onClick={() => setSelectedTab("CS_MENUAL")}
        />
        <CSButton
          label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_DATA}
          isActive={selectedTab === "CS_DATA"}
          onClick={() => setSelectedTab("CS_DATA")}
        />
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "10px",
    backgroundColor: "var(--blue300)",
    padding: "20px 0px 20px 20px",
  },
}

export default CSButtonGroup
