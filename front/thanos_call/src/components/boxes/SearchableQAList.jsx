import React, { useState } from "react"
import QABoxList from "./QABoxList"
import SearchBox from "./SearchBox"
import { STRINGS } from "../../config/string"
const SearchableQAList = () => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <SearchBox
          placeholder={STRINGS.BOXES.SEARCHABLE_QA_LIST}
          onSearch={setSearchQuery}
          style={styles.searchBox}
        />
        <div style={styles.QABoxList}>
          <QABoxList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "auto",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  content: {
    backgroundColor: "var(--blue500)",
    display: "flex",
    height: "805px",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
  },
  searchBox: {
    marginBottom: "50px",
  },
  QABoxList: {
    backgroundColor: "var(--white)",
    borderRadius: "10px",
    width: "100%",
    height: "730px",
  },
}

export default SearchableQAList
