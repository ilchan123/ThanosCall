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
        placeholder={placeholder || STRINGS.BOXES.SEARCHBOX}
        style={styles.input}
      />
      <button style={styles.button} onClick={() => onSearch(query)}>
        <Search size={20} color="var(--gray600)" />
      </button>
    </div>
  )
}

const styles = {
  container: {
    fontFamily: "Pretendard-bold",
    fontWeight: "600",
    position: "relative",
    width: "600px",
    height: "38px",
    backgroundColor: "var(--white)",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    border: "2px solid var(--gray350)",
    padding: "5px 10px",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    fontSize: "14px",
    padding: "8px",
    color: "var(--gray700)",
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
}

export default SearchBox
