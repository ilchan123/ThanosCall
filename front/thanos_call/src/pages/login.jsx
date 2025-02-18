import LoginPanel from "../components/login/login_panel"
import Cover from "../assets/images/Login_cover.svg"
import LogoWhite from "../assets/images/Logo_Thanos_white.svg"
import LogoDown from "../assets/images/Login_down_letter.svg"

const Login_Page = () => {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.loginPanel}>
          <LoginPanel />
          <img style={styles.logodownimage} src={LogoDown} alt="Logo" />
        </div>

        <div style={styles.illustration}>
          <img style={styles.coverImage} src={Cover} alt="Cover" />
          <img style={styles.logoWhite} src={LogoWhite} alt="Logo White" />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "var(--gray100)",
  },
  contentWrapper: {
    display: "flex",
    minWidth: "1200px",
    maxWidth: "100%",
    height: "800px",
    backgroundColor: "var(--white)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  loginPanel: {
    flexBasis: "45%",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--white)",
    padding: "40px",
    position: "relative",
    marginBottom: "50px",
  },
  logodownimage: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  illustration: {
    flexBasis: "50%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--blue300)",
    width: "100%",
    height: "100%",
    position: "relative",
  },
  coverImage: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "auto",
    objectFit: "contain",
  },
  logoWhite: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "30%",
    height: "auto",
    objectFit: "contain",
    marginBottom: "50px",
  },
}

export default Login_Page
