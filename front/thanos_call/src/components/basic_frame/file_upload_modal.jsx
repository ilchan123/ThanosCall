import React, { useState } from "react"
import FolderIcon from "@mui/icons-material/Folder"
import { STRINGS } from "../../config/string"
const FileUploadModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <FolderIcon style={styles.icon} />

        <label style={styles.uploadBox}>
          {selectedFile
            ? selectedFile.name
            : STRINGS.BASIC_FRAME.FILE_UPLOAD_MODAL.TAKE_IT}
          <input
            type="file"
            style={styles.fileInput}
            onChange={handleFileChange}
          />
        </label>
        <div style={styles.detail}>
          {STRINGS.BASIC_FRAME.FILE_UPLOAD_MODAL.VOICE_FILE_TAKE}
        </div>
        <button style={styles.button} onClick={onClose}>
          {STRINGS.BASIC_FRAME.FILE_UPLOAD_MODAL.CLOSE}
        </button>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "300px",
    height: "300px",
    backgroundColor: "var(--white)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    border: "2px dashed var(--black100)",
    padding: "20px",
  },
  icon: {
    fontSize: "100px",
    color: "var(--red300)",
  },
  uploadBox: {
    width: "30%",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    border: "2px solid var(--white)",
    borderRadius: "10px",
    color: "var(--white)",
    backgroundColor: "var(--blue300)",
  },
  fileInput: {
    display: "none",
  },
  button: {
    backgroundColor: "var(--blue500)",
    color: "var(--white)",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  detail: {
    color: "var(--blue300)",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
  },
}

export default FileUploadModal
