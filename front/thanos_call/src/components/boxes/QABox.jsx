import React from "react"

const FAQItem = ({ question, answer, details, isOpen, onClick }) => {
  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.qaSection,
          backgroundColor: isOpen ? "var(--blue100)" : "var(--white)",
          borderBottomLeftRadius: isOpen ? "0px" : "7px",
          borderBottomRightRadius: isOpen ? "0px" : "7px",
        }}
        onClick={onClick}
      >
        <p
          style={{
            ...styles.question,
            color: isOpen ? "var(--blue500)" : "var(--blue300)",
          }}
        >
          Q. {question}
        </p>
        <p
          style={{
            ...styles.answer,
            color: isOpen ? "var(--gray700)" : "var(--gray600)",
          }}
        >
          A. {answer}
        </p>
      </div>

      <div
        style={{
          ...styles.detailsContainer,
          maxHeight: isOpen ? "200px" : "0px",
          padding: isOpen ? "10px" : "0px",
          backgroundColor: "var(--white)",
          borderBottomLeftRadius: "7px",
          borderBottomRightRadius: "7px",
        }}
      >
        {details && <p style={styles.details}>{details}</p>}
      </div>
    </div>
  )
}

const styles = {
  container: {
    width: "90%",
    border: "3px solid var(--blue200)",
    borderRadius: "13px",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  },
  qaSection: {
    padding: "10px",
    borderRadius: "9px 9px 0px 0px",
    transition:
      "background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
  },
  question: {
    fontFamily: "Pretendard-bold",
    fontWeight: "100",
    fontSize: "20px",
    borderRadius: "10px",
    marginBottom: "5px",
    transition: "color 0.3s ease-in-out",
  },
  answer: {
    transition: "color 0.3s ease-in-out",
  },
  detailsContainer: {
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out, padding 0.3s ease-in-out",
  },
  details: {
    fontSize: "15px",
    color: "var(--gray700)",
    padding: "5px 10px",
  },
}

export default FAQItem
