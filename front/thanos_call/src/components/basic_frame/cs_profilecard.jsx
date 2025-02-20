import React from "react"
import { STRINGS } from "../../config/string"
import profileImage from "../../assets/images/Profile_Mask.svg"

const CSProfileCard = ({ image, rank, name, age, cases, duration }) => {
  const data = {
    IMAGE: image || profileImage,
    RANK: STRINGS.BASIC_FRAME.CSPROFILECARD.RANK.replace(
      "{RANK}",
      String(rank || STRINGS.BASIC_FRAME.CSPROFILECARD.RANK_REPLACE)
    ),
    NAME: STRINGS.BASIC_FRAME.CSPROFILECARD.NAME.replace(
      "{NAME}",
      String(name || STRINGS.BASIC_FRAME.CSPROFILECARD.NAME_REPLACE)
    ),
    AGE: STRINGS.BASIC_FRAME.CSPROFILECARD.AGE.replace(
      "{AGE}",
      String(age || STRINGS.BASIC_FRAME.CSPROFILECARD.AGE_REPLACE)
    ),
    CASES: STRINGS.BASIC_FRAME.CSPROFILECARD.CASES.replace(
      "{CASES}",
      String(cases || STRINGS.BASIC_FRAME.CSPROFILECARD.CASES_REPLACE)
    ),
    DURATION: STRINGS.BASIC_FRAME.CSPROFILECARD.DURATION.replace(
      "{DURATION}",
      String(duration || STRINGS.BASIC_FRAME.CSPROFILECARD.DURATION_REPLACE)
    ),
  }

  return (
    <div style={styles.card}>
      <div style={styles.header} />
      <img src={data.IMAGE} alt="Profile" style={styles.profileImage} />
      <div style={styles.content}>
        <p style={styles.rank}>
          {data.RANK} <strong style={styles.name}>{data.NAME}</strong>
        </p>
        <div style={styles.infoBox}>
          <p style={styles.p}>
            <strong style={styles.spacing}>
              {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_AGE}
            </strong>{" "}
            {data.AGE}
          </p>
          <p style={styles.p}>
            <strong style={styles.spacing}>
              {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_TODAY_COUNSEL_COUNT}
            </strong>{" "}
            {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_TODAY_COUNSEL_COUNT_ACTUAL.replace(
              "{cases}",
              data.CASES
            )}
            <br />
            <strong style={styles.spacing}>
              {STRINGS.BASIC_FRAME.CSPROFILECARD.USER_TODAY_COUNSEL_TIME}
            </strong>{" "}
            {data.DURATION}
          </p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  card: {
    width: "250px",
    borderRadius: "30px",
    boxShadow: "var(--text-box-shadow)",
    overflow: "hidden",
    backgroundColor: "var(--white)",
    textAlign: "center",
  },
  spacing: {
    display: "inline-block",
    fontWeight: "500",
  },
  header: {
    height: "90px",
    backgroundColor: "var(--blue200)",
  },
  profileImage: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    marginTop: "-60px",
    border: "3px solid white",
    objectFit: "cover",
  },
  content: {
    fontFamily: "Pretendard-medium",
    fontWeight: "300",
    padding: "10px",
    paddingBottom: "80px",
  },
  rank: {
    fontSize: "20px",
    color: "var(--gray500)",
    marginTop: "5px",
  },
  name: {
    color: "var(--black100)",
    fontSize: "25px",
    fontWeight: "500",
  },
  infoBox: {
    backgroundColor: "var(--gray200)",
    padding: "25px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginTop: "10px",
    textAlign: "left",
    fontSize: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    lineHeight: "1.5",
  },
  p: {
    margin: "0",
  },
}

export default CSProfileCard
