import React, { useState } from "react"
import FAQItem from "./QABox"
import { STRINGS } from "../../config/string"
const FAQList = ({ searchQuery }) => {
  const [activeIndex, setActiveIndex] = useState(null) // 🔹 현재 열린 항목 추적

  const faqs = [
    {
      question: STRINGS.BOXES.QABOXLIST.FAQS.QUESTION_1,
      answer: STRINGS.BOXES.QABOXLIST.FAQS.ANSWER_1,
      details: STRINGS.BOXES.QABOXLIST.FAQS.DETAILS_1,
    },
    {
      question: STRINGS.BOXES.QABOXLIST.FAQS.QUESTION_2,
      answer: STRINGS.BOXES.QABOXLIST.FAQS.ANSWER_2,
      details: STRINGS.BOXES.QABOXLIST.FAQS.DETAILS_2,
    },
    {
      question: STRINGS.BOXES.QABOXLIST.FAQS.QUESTION_3,
      answer: STRINGS.BOXES.QABOXLIST.FAQS.ANSWER_3,
      details: STRINGS.BOXES.QABOXLIST.FAQS.DETAILS_3,
    },
    {
      question: STRINGS.BOXES.QABOXLIST.FAQS.QUESTION_4,
      answer: STRINGS.BOXES.QABOXLIST.FAQS.ANSWER_4,
      details: STRINGS.BOXES.QABOXLIST.FAQS.DETAILS_4,
    },
    {
      question: STRINGS.BOXES.QABOXLIST.FAQS.QUESTION_5,
      answer: STRINGS.BOXES.QABOXLIST.FAQS.ANSWER_5,
      details: STRINGS.BOXES.QABOXLIST.FAQS.DETAILS_5,
    },
  ]

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div style={styles.scrollContainer}>
      <div style={styles.listContainer}>
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              details={faq.details}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))
        ) : (
          <p style={styles.noResult}>
            {STRINGS.BOXES.QABOXLIST.NO_SEARCH_RESULT}
          </p>
        )}
      </div>
    </div>
  )
}

const styles = {
  scrollContainer: {
    height: "700px",
    maxHeight: "730px",
    overflowY: "auto",
    width: "auto",
    maxWidth: "600px",
    padding: "10px",
    border: "1px solid var(--gray300)",
    borderRadius: "10px",
    backgroundColor: "var(--white)",
  },
  listContainer: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  noResult: {
    textAlign: "center",
    fontSize: "18px",
    color: "var(--gray500)",
  },
}

export default FAQList
