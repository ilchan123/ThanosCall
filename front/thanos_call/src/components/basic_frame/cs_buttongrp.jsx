import React, { useState } from "react"
import CSButton from "./cs_button"
import { STRINGS } from "../../config/string"

const CSButtonGroup = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <CSButton
          label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_MANAGE}
          isActive={activeIndex === 0}
          onClick={() => setActiveIndex(0)}
        />
        <CSButton
          label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_MENUAL}
          isActive={activeIndex === 1}
          onClick={() => setActiveIndex(1)}
        />
        <CSButton
          label={STRINGS.BASIC_FRAME.CSButtonGroup.CS_DATA}
          isActive={activeIndex === 2}
          onClick={() => setActiveIndex(2)}
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
