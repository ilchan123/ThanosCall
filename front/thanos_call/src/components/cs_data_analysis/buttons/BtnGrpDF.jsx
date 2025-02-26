import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import BButtonColored from "./BButtonColored"
import BButtonWhite from "./BButtonWhite"
import SButtonColored from "./SButtonColored"
import SButtonWhite from "./SButtonWhite"
import { STRINGS } from "../../../config/string"

const BtnGrpDF = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedLarge, setSelectedLarge] = useState(
    STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.DATA_CHART_VIEW
  )
  const [selectedSmall, setSelectedSmall] = useState(
    STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.DATA_ALL
  )

  const smallButtonGroups = {
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.DATA_CHART_VIEW]: [
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.USER_INFO,
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.PRODUCT_LOG,
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.ORDER_LOG,
    ],
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.DATA_STATIC]: [
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.USER_COMPO,
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.ITEM_TREND,
    ],
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.CS_STATIC]: [
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.CALL_INFO,
      STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.CONSUL_STATIC,
    ],
  }

  const routeMap = {
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.USER_COMPO]:
      "/call_center/data/user_ds",
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.ITEM_TREND]:
      "/call_center/data/product_ds",
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.CALL_INFO]:
      "/call_center/data/callInfo_ds",
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.CONSUL_STATIC]:
      "/call_center/data/cs_statics",
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.USER_INFO]:
      "/call_center/data/member_info",
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.ORDER_LOG]:
      "/call_center/data/order_log",
    [STRINGS.CS_DATA_ANALYSIS.BUTTONS.BTN_GRP_DF.PRODUCT_LOG]:
      "/call_center/data/product_log",
  }

  useEffect(() => {
    const foundKey = Object.keys(routeMap).find(
      (key) => routeMap[key] === location.pathname
    )
    if (foundKey) {
      setSelectedSmall(foundKey)
    }
  }, [location.pathname])

  const handleLargeButtonClick = (category) => {
    setSelectedLarge(category)
    const firstSmallBtn = smallButtonGroups[category][0]
    setSelectedSmall(firstSmallBtn)
    if (routeMap[firstSmallBtn]) {
      navigate(routeMap[firstSmallBtn], { replace: true })
    }
  }

  const handleSmallButtonClick = (smallBtn) => {
    setSelectedSmall(smallBtn)
    if (routeMap[smallBtn]) {
      navigate(routeMap[smallBtn], { replace: true })
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.buttonWrapper}>
        <div style={styles.largeButtonGroup}>
          {Object.keys(smallButtonGroups).map((category) =>
            selectedLarge === category ? (
              <BButtonColored
                key={category}
                text={category}
                onClick={() => handleLargeButtonClick(category)}
              />
            ) : (
              <BButtonWhite
                key={category}
                text={category}
                onClick={() => handleLargeButtonClick(category)}
              />
            )
          )}
        </div>
      </div>

      <div style={styles.buttonWrapper}>
        <div style={styles.smallButtonGroup}>
          {smallButtonGroups[selectedLarge].map((smallBtn) =>
            selectedSmall === smallBtn ? (
              <SButtonColored
                key={smallBtn}
                text={smallBtn}
                onClick={() => handleSmallButtonClick(smallBtn)}
              />
            ) : (
              <SButtonWhite
                key={smallBtn}
                text={smallBtn}
                onClick={() => handleSmallButtonClick(smallBtn)}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "97.2%",
    gap: "16px",
    alignItems: "flex-start",
    backgroundColor: "var(--gray200)",
    padding: "10px 20px",
    borderRadius: "10px",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  largeButtonGroup: {
    display: "flex",
    gap: "12px",
    justifyContent: "left",
    width: "500px",
  },
  smallButtonGroup: {
    display: "flex",
    gap: "12px",
    justifyContent: "left",
    width: "500px",
  },
}

export default BtnGrpDF
