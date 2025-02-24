import React, { useState } from "react"
import CSSideBar from "./cs_sidebar"
import CSHeader from "./cs_header"
import FileUploadModal from "./file_upload_modal"

const CSFrame = () => {
  const [selectedTab, setSelectedTab] = useState("CS_MANAGE")
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)

  return (
    <div style={styles.container}>
      <CSSideBar
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        setIsUploadModalOpen={setIsUploadModalOpen}
      />
      <div style={styles.content}>
        <CSHeader selectedTab={selectedTab} />
      </div>

      {isUploadModalOpen && (
        <FileUploadModal onClose={() => setIsUploadModalOpen(false)} />
      )}
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundColor: "var(--gray300)",
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}

export default CSFrame
