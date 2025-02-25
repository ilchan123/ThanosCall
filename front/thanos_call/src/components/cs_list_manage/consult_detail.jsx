import React from "react"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { STRINGS } from "../../config/string"
import PlayButton from "./play_button"
export default function CSConsultationDetail({ consultData, onClose }) {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          <button style={styles.button} onClick={onClose}>
            <ArrowBackIcon style={styles.icon} />{" "}
            {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.BACK}
          </button>
          {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CS_CONSULT_DETAIL}
        </h2>
        <p style={styles.subtitle}>
          {consultData.consult_time
            ? new Date(consultData.consult_time.seconds * 1000).toLocaleString()
            : STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.NO_DATE_INFO}{" "}
          -{" "}
          {consultData.category ||
            STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.NO_CATEGORY_INFO}
        </p>

        <div style={styles.section}>
          <div style={styles.grid}>
            <p style={styles.textLeft}>
              <strong>{STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CUSTOMER}</strong>{" "}
              {consultData.customer || "N/A"}
            </p>
            <p style={styles.textLeft}>
              <strong>{STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULTER}</strong>{" "}
              {consultData.consulter_id || "N/A"}
            </p>
            <p style={styles.textLeft}>
              <strong>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_DATE}
              </strong>{" "}
              {consultData.consult_time
                ? new Date(consultData.consult_time.seconds * 1000)
                    .toISOString()
                    .split("T")[0]
                : "N/A"}
            </p>
            <p style={styles.textLeft}>
              <strong>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_CATEGORY}
              </strong>{" "}
              {consultData.category || "N/A"}
            </p>
            <p style={styles.textLeft}>
              <strong>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.PURCHASE_CHECK}
              </strong>{" "}
              {consultData.consult_progress ? "O" : "X"}
            </p>
            <p style={styles.textLeft}>
              <strong>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.ORDER_NUMBER}
              </strong>{" "}
              {consultData.order_id || "N/A"}
            </p>
            <p style={styles.textLeft}>
              <strong>{STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.ITEM_CODE}</strong>{" "}
              {Array.isArray(consultData.product_id)
                ? consultData.product_id.join(", ")
                : consultData.product_id || "N/A"}
            </p>
            <p style={styles.textLeft}>
              <strong>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_ADD}
              </strong>{" "}
              {consultData.consult_add ||
                STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.NO}
            </p>
            <p style={styles.textLeft}>
              <strong>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_TIME}
              </strong>{" "}
              {consultData.consult_length
                ? `${consultData.consult_length}`
                : "N/A"}
            </p>
          </div>
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.contentColumn}>
            <div style={styles.contentBox}>
              <h3 style={styles.sectionTitle}>
                {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_BRIEF}
              </h3>
              <ul style={styles.list}>
                {Array.isArray(consultData.consult_brief) ? (
                  consultData.consult_brief.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <li>
                    {consultData.consult_brief ||
                      STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_BRIEF_NO}
                  </li>
                )}
              </ul>
            </div>

            <div style={styles.contentBox}>
              <div style={styles.sectionTitleContainer}>
                <h3 style={styles.sectionTitle}>
                  {STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_DETAILS}
                </h3>
                <div style={styles.buttonWrapper}>
                  <PlayButton />
                </div>
              </div>
              <p style={styles.paragraph}>
                {consultData.consult_details ||
                  STRINGS.CS_LIST_MANAGE.CONSULT_DETAIL.CONSULT_DETAILS_NO}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: "var(--gray100)",
    minHeight: "60vh",
    marginTop: "50px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    margin: "30px",
    maxWidth: "740px",
    backgroundColor: "var(--white)",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    paddingBottom: "25px",
  },
  button: {
    margin: "5px",
    display: "flex",
    alignItems: "center",
    color: "var(--black100)",
    background: "none",
    backgroundColor: "var(--gray300)",
    border: "1px solid var(--white)",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "15px",
  },
  title: {
    fontSize: "35px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "20px",
    textAlign: "center",
    color: "var(--black100)",
    marginTop: "3px",
    fontWeight: "300",
  },
  section: {
    paddingTop: "15px",
    borderTop: "1px solid var(--black100)",
    lineHeight: "0.2",
    marginBottom: "10px",
  },
  grid: {
    justifyContent: "center",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "1fr",
    color: "var(--black100)",
  },
  textLeft: {
    paddingLeft: "130px",
    fontSize: "15px",
    textAlign: "left",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "640px",
  },
  contentColumn: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "5px",
    width: "520px",
  },
  contentBox: {
    padding: "5px",
    borderRadius: "8px",
    backgroundColor: "var(--gray100)",
    border: "1px solid var(--black100)",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    borderBottom: "1px solid var(--gray500)",
    marginBottom: "20px",
    marginTop: "10px",
    textAlign: "left",
    flexDirection: "row",
  },
  sectionTitleContainer: {
    display: "flex",
    gap: "10px",
    paddingTop: "3px",
    flexWrap: "nowrap",
    minHeight: "35px",
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    height: "10%", // 부모 높이에 맞춰 버튼을 정렬
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    color: "var(--black100)",
  },
  paragraph: {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginTop: "8px",
    color: "var(--black100)",
  },
}
