import React, { useEffect, useState } from "react"
import { db, collection, getDocs } from "../../services/firebase"
import { STRINGS } from "../../config/string"
import CSConsultationDetail from "./consult_detail"

const DataFrame = ({ collectionName, filters }) => {
  const [data, setData] = useState([])
  const [fields, setFields] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [selectedConsultData, setSelectedConsultData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName))
        const newData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        if (newData.length > 0) {
          setFields(Object.keys(newData[0]))
        }
        setData(newData)
      } catch (error) {
        //
      }
    }

    fetchData()
  }, [collectionName])

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data

      if (filters?.consultant && filters.consultant !== "ALL") {
        filtered = filtered.filter(
          (item) => item.consulter_id === filters.consultant
        )
      }

      if (filters?.category && filters.category !== "ALL") {
        filtered = filtered.filter((item) => item.category === filters.category)
      }

      if (filters?.progress && filters.progress !== "ALL") {
        filtered = filtered.filter(
          (item) => item.consult_progress === filters.progress
        )
      }

      if (filters?.startDate && filters?.endDate) {
        filtered = filtered.filter((item) => {
          const consultDate = item.consult_time?.seconds
            ? new Date(item.consult_time.seconds * 1000)
            : null
          return (
            consultDate &&
            consultDate >= filters.startDate &&
            consultDate <= filters.endDate
          )
        })
      }

      if (filters?.search) {
        filtered = filtered.filter((item) =>
          Object.values(item).some((value) =>
            value
              ?.toString()
              .toLowerCase()
              .includes(filters.search.toLowerCase())
          )
        )
      }

      setFilteredData(filtered)
    }

    applyFilters()
  }, [filters, data])

  const handleRowClick = (item) => {
    setSelectedConsultData(item)
  }

  return (
    <div style={styles.container}>
      {selectedConsultData ? (
        <CSConsultationDetail
          consultData={selectedConsultData}
          onClose={() => setSelectedConsultData(null)}
        />
      ) : (
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead style={styles.header}>
              <tr>
                {fields.map((field) => (
                  <th key={field} style={{ ...styles.th, width: "auto" }}>
                    {field}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={index}
                    style={styles.row}
                    onClick={() => handleRowClick(item)}
                  >
                    {fields.map((field) => (
                      <td
                        key={field}
                        style={{ ...styles.td, width: "auto" }}
                        title={item[field] || ""}
                      >
                        {field === "consult_time"
                          ? typeof item[field] === "object" &&
                            item[field]?.seconds
                            ? new Date(item[field].seconds * 1000)
                                .toISOString()
                                .split("T")[0]
                            : "-"
                          : item[field]?.length > 8
                            ? `${item[field].substring(0, 7)}...`
                            : item[field] || "-"}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={fields.length} style={styles.noData}>
                    {STRINGS.BASIC_FRAME.DATA_FRAME}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    height: "700px",
    fontFamily: "Pretendard-medium",
    fontWeight: "300",
    fontSize: "15px",
    width: "100%",
    border: "2px solid var(--black100)",
    borderRadius: "10px",
    margin: "5px",
    backgroundColor: "var(--gray100)",
    padding: "10px",
    paddingBottom: "20px",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },
  tableWrapper: {
    width: "100%",
    maxHeight: "650px",
    overflowY: "auto",
    overflowX: "hidden",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "2px solid var(--gray200)",
    padding: "12px",
    textAlign: "center",
    backgroundColor: "var(--gray300)",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },
  td: {
    border: "1px solid var(--gray200)",
    padding: "10px",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}

export default DataFrame
