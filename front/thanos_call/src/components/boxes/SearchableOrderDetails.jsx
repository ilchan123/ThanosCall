import React, { useState } from "react"
import SearchBox from "./SearchBox"
import OrderDetails from "./OrderDetails"
import ReturnExchange from "./ReturnExchange"
import { STRINGS } from "../../config/string"
const SearchableOrderDetails = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  return (
    <div style={styles.container}>
      <SearchBox
        placeholder={STRINGS.BOXES.SEARCHABLE_ORDER_DETAILS}
        onSearch={handleSearch}
      />

      <div style={styles.contentWrapper}>
        <OrderDetails orderId={searchQuery} />
        <ReturnExchange orderId={searchQuery} />
      </div>
    </div>
  )
}

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "auto",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
  },
  contentWrapper: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "720px",
    width: "100%",
  },
}

export default SearchableOrderDetails
