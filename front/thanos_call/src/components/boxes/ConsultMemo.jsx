import React from "react"
import { STRINGS } from "../../config/string"
const ConsultMemo = () => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>
        {STRINGS.BOXES.CONSULT_MEMO.CUSTOMER_CONSULT_INPUT}
      </label>
      <textarea
        style={styles.textarea}
        placeholder={STRINGS.BOXES.CONSULT_MEMO.CUNSULT_INPUT}
      />
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "100%",
    maxWidth: "100%",
  },
  label: {
    fontFamily: "Pretendard-bold",
    fontWeight: "500",
    fontSize: "20px",
  },
  textarea: {
    width: "96%",
    maxWidth: "100%",
    height: "100px",
    padding: "10px",
    border: "1px solid var(--gray300)",
    borderRadius: "8px",
    backgroundColor: "var(--gray200)",
    resize: "none",
    fontFamily: "Pretendard-bold",
    fontWeight: "500",
    fontSize: "16px",
  },
}

export default ConsultMemo
