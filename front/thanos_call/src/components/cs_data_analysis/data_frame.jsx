import React, { useEffect, useState } from "react"
import { db, collection, getDocs } from "../../services/firebase"
import * as XLSX from "xlsx"
import excelIcon from "../../assets/images/excel.svg"
import { STRINGS } from "../../config/string"

const DataFrame = ({ collectionName }) => {
  const [data, setData] = useState([])
  const [fields, setFields] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName))
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }))

      if (newData.length > 0) {
        setFields(Object.keys(newData[0]))
      }
      setData(newData)
    }

    fetchData()
  }, [collectionName])

  const handleExcelDownload = () => {
    if (data.length === 0) {
      alert(STRINGS.CS_DATA_ANALYSIS.DATA_FRAME_MUL.NO_SAVE_EMPTY)
      return
    }

    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")

    XLSX.writeFile(workbook, `${collectionName}_data.xlsx`)
  }

  return (
    <div>
      <button style={styles.excelButton} onClick={handleExcelDownload}>
        <img
          src={excelIcon}
          alt={STRINGS.CS_DATA_ANALYSIS.DATA_FRAME_MUL.EXCEL_ICON}
          style={styles.excelIcon}
        />
        <span style={styles.excelText}>
          {STRINGS.CS_DATA_ANALYSIS.DATA_FRAME_MUL.EXCEL_SAVE}
        </span>
      </button>

      <div style={styles.tableContainer}>
        <table style={styles.dataTable}>
          <thead style={styles.tableHeader}>
            <tr>
              {fields.map((field) => (
                <th key={field} style={styles.tableThTd}>
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {fields.map((field) => {
                  const value =
                    typeof item[field] === "object" && item[field]?.seconds
                      ? new Date(item[field].seconds * 1000).toLocaleString()
                      : item[field] || "-"

                  const displayValue =
                    value.length > 8 ? value.substring(0, 15) + "..." : value

                  return (
                    <td key={field} style={styles.tableThTd} title={value}>
                      {displayValue}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  excelButton: {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    backgroundColor: "var(--white)",
    color: "var(--black100)",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
    marginLeft: "auto",
    marginRight: "20px",
    gap: "5px",
    zIndex: "10",
    position: "relative",
  },
  excelText: {
    order: 1,
  },
  excelIcon: {
    width: "18px",
    height: "18px",
    order: 2,
  },
  tableContainer: {
    height: "670px",
    overflowY: "auto",
    border: "2px solid var(--black100)",
    borderRadius: "10px",
    backgroundColor: "var(--white)",
    position: "relative",
  },
  dataTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    position: "sticky",
    top: "0",
    zIndex: "2",
    backgroundColor: "var(--gray300)",
  },
  tableThTd: {
    border: "2px solid var(--gray200)",
    padding: "8px",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "100px",
  },
}

export default DataFrame
