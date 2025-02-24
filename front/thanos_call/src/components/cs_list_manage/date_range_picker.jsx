import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { FaRegCalendarAlt } from "react-icons/fa"
import { format } from "date-fns"
import ko from "date-fns/locale/ko"

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date(2025, 2, 15))
  const [endDate, setEndDate] = useState(new Date(2025, 5, 25))
  const [showPicker, setShowPicker] = useState(false)
  const [appliedStartDate, setAppliedStartDate] = useState(startDate)
  const [appliedEndDate, setAppliedEndDate] = useState(endDate)

  const applyDateRange = () => {
    setAppliedStartDate(startDate)
    setAppliedEndDate(endDate)
    setShowPicker(false)
  }

  return (
    <div style={styles.container}>
      <div style={styles.dateInput} onClick={() => setShowPicker(!showPicker)}>
        <span>
          {format(appliedStartDate, "yyyy. M. d.")} ~{" "}
          {format(appliedEndDate, "yyyy. M. d.")}
        </span>
        <FaRegCalendarAlt style={styles.icon} />
      </div>

      {showPicker && (
        <div style={styles.calendarContainer}>
          <div style={styles.datePickers}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              locale={ko}
              dateFormat="yyyy. M. d."
              inline
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              locale={ko}
              dateFormat="yyyy. M. d."
              inline
            />
          </div>

          <div style={styles.buttonContainer}>
            <button style={styles.applyButton} onClick={applyDateRange}>
              적용
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "Pretendard-bold",
    fontWeight: "500",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dateInput: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "var(--white)",
    padding: "8px 12px",
    borderRadius: "10px",
    height: "30px",
    boxShadow: "--text-box-shadow",
    border: "1px solid var(--white)",
    cursor: "pointer",
    width: "fit-content",
    fontSize: "20px",
  },
  icon: {
    marginLeft: "8px",
    color: "var(--gray500)",
    fontSize: "20px",
    cursor: "pointer",
  },
  calendarContainer: {
    position: "absolute",
    top: "110%",
    left: "80%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    padding: "16px",
    boxShadow: "var(--text-box-shadow)",
    borderRadius: "8px",
    border: "1px solid var(--white)",
    zIndex: 10,
    width: "fit-content",
  },
  datePickers: {
    display: "flex",
    gap: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },
  applyButton: {
    backgroundColor: "var(--black100)",
    color: "var(--white)",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
  },
}

export default DateRangePicker
