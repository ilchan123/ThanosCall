import React from "react"
import { useUser } from "../../context/UserContext"
import profileImage from "../../assets/images/Profile_Mask.svg"
import { STRINGS } from "../../config/string"
const CSProfileCard = () => {
  const { user } = useUser()

  return (
    <div style={styles.card}>
      <div style={styles.header} />
      <img
        src={user?.img || profileImage}
        alt="Profile"
        style={styles.profileImage}
      />
      <div style={styles.content}>
        <p style={styles.rank}>
          {user?.rank || STRINGS.BASIC_FRAME.CS_PROFILECARD.NO_RANK}{" "}
          <strong style={styles.name}>
            {user?.name || STRINGS.BASIC_FRAME.CS_PROFILECARD.NO_NAME}
          </strong>
        </p>
        <div style={styles.infoBox}>
          <p style={styles.p}>
            {STRINGS.BASIC_FRAME.CS_PROFILECARD.USER_AGE.replace(
              "{count}",
              user?.age ? user.age : STRINGS.BASIC_FRAME.CS_PROFILECARD.NO_INFO
            )}
          </p>
          <p style={styles.p}>
            {STRINGS.BASIC_FRAME.CS_PROFILECARD.USER_CONSULT_COUNT.replace(
              "{count}",
              user?.consult_count
                ? user.consult_count
                : STRINGS.BASIC_FRAME.CS_PROFILECARD.NO_INFO
            )}
          </p>
          <p style={styles.p}>
            {STRINGS.BASIC_FRAME.CS_PROFILECARD.USER_CONSULT_TIME.replace(
              "{count}",
              user?.consult_time
                ? user.consult_time
                : STRINGS.BASIC_FRAME.CS_PROFILECARD.NO_INFO
            )}
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
  header: {
    height: "90px",
    backgroundColor: "var(--blue200)",
  },
  profileImage: {
    width: "130px",
    height: "130px",
    borderRadius: "50%",
    marginTop: "-60px",
    border: "3px solid var(--white)",
    objectFit: "cover",
  },
  infoBox: {
    backgroundColor: "var(--gray200)",
    padding: "20px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    marginTop: "10px",
    textAlign: "left",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    lineHeight: "1.5",
  },
  p: {
    margin: "0",
  },
  spacing: {
    fontWeight: "bold",
  },
}

export default CSProfileCard
