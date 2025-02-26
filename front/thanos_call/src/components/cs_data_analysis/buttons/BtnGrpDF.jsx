import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import BButtonColored from "./BButtonColored"
import BButtonWhite from "./BButtonWhite"
import SButtonColored from "./SButtonColored"
import SButtonWhite from "./SButtonWhite"

const BtnGrpDF = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [selectedLarge, setSelectedLarge] = useState("데이터 표로 보기")
  const [selectedSmall, setSelectedSmall] = useState("전체")

  // 🔹 큰 버튼 그룹에 따른 작은 버튼
  const smallButtonGroups = {
    "데이터 표로 보기": [
      "전체",
      "회원 정보",
      "구매/물류",
      "통화 내역",
      "상품 내역",
    ],
    "데이터 통계": ["회원 구성", "상품 트렌드"],
    "CS 통계": ["콜 정보", "상담원 통계"],
  }

  // 🔹 URL과 매핑
  const routeMap = {
    "회원 구성": "/call_center/data/user_ds",
    "상품 트렌드": "/call_center/data/product_ds",
    "콜 정보": "/call_center/data/callInfo_ds",
    "상담원 통계": "/call_center/data/cs_statics",
    전체: "/call_center/data/all",
    "구매/물류": "/call_center/data/order_log",
    "회원 정보": "/call_center/data/member_info",
    "통화 내역": "/call_center/data/call_log",
    "상품 내역": "/call_center/data/product_log",
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
    backgroundColor: "#F3F4F6",
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
