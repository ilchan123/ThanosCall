import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

const DropdownButton = ({ options, onSelect, defaultLabel }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultLabel)
  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div style={styles.dropdownContainer}>
      <button style={styles.dropdownButton} onClick={toggleDropdown}>
        <span style={styles.buttonText}>{selectedOption}</span>
        {isOpen ? (
          <FaChevronUp style={styles.icon} />
        ) : (
          <FaChevronDown style={styles.icon} />
        )}
      </button>

      {isOpen && (
        <ul style={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={index}
              style={styles.dropdownItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const styles = {
  dropdownContainer: {
    position: "relative",
    display: "inline-block",
  },
  dropdownButton: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    backgroundColor: "var(--white)",
    border: "1px solid var(--white)",
    width: "200px",
    height: "47px",
    borderRadius: "10px",
    boxShadow: "var(--text-box-shadow)",
    cursor: "pointer",
  },
  buttonText: {
    fontFamily: "Pretendard-medium",
    fontWeight: "600",
    fontSize: "18px",
    width: "100%",
    color: "var(--black100)",
    marginRight: "8px",
  },
  icon: {
    fontSize: "20px",
    color: "var(--gray600)",
  },
  dropdownList: {
    position: "absolute",
    left: "0",
    top: "100%",
    marginTop: "4px",
    width: "100%",
    backgroundColor: "var(--white)",
    border: "1px solid var(--white)",
    borderRadius: "8px",
    boxShadow: "var(--box-shadow-overlay)",
    listStyle: "none",
    padding: "4px 0",
    zIndex: "10",
  },
  dropdownItem: {
    fontFamily: "Pretendard-medium",
    fontWeight: "600",
    fontSize: "14px",
    padding: "8px 12px",
    color: "var(--gray600)",
    cursor: "pointer",
  },
}

export default DropdownButton
