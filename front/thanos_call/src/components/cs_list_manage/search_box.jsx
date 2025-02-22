import React, { useState } from "react"
import { Search } from "lucide-react"
import { STRINGS } from "../../config/string"

const SearchBox = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("")

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          placeholder || STRINGS.CS_LIST_MANAGE.SEARCHBOX.SEARCH_TEXT
        }
        style={styles.input}
      />
      <button style={styles.button} onClick={() => onSearch(query)}>
        <Search size={20} color="var(--gray500)" style={styles.icon} />
      </button>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "20%",
    minWidth: "140px",
    maxWidth: "550px",
    height: "45px",
    backgroundColor: "var(--white)",
    borderRadius: "10px",
    border: "1px solid var(--white)",
    padding: "0 10px",
    boxShadow: "var(--text-box-shadow)",
  },
  input: {
    fontFamily: "Pretendard-medium",
    fontWeight: "300",
    fontSize: "16px",
    flex: 1,
    border: "none",
    outline: "none",
    padding: "5px",
    color: "var(--black100)",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
    width: "40px",
    height: "40px",
    boxSizing: "border-box",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
}

export default SearchBox
