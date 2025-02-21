import React, { useEffect, useState } from "react"
import { db, collection, getDocs } from "../../services/firebase"

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

  return (
    <div>
      <div style={tableStyles.container}>
        <table style={tableStyles.table}>
          <thead style={tableStyles.title}>
            <tr>
              {fields.map((field) => (
                <th
                  key={field}
                  style={{ ...tableStyles.thTd, ...tableStyles.th }}
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                {fields.map((field) => (
                  <td key={field} style={tableStyles.thTd}>
                    {typeof item[field] === "object" && item[field]?.seconds
                      ? new Date(item[field].seconds * 1000).toLocaleString()
                      : item[field] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// 테이블 스타일
const tableStyles = {
  container: {
    height: "723px",
    overflowY: "auto",
    border: "2px solid var(--black100)",
    borderRadius: "10px",
    marginTop: "10px",
    backgroundColor: "white",
    position: "relative",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  title: {
    position: "sticky",
    top: "0",
    zIndex: "2",
    backgroundColor: "var(--gray300)",
  },
  thTd: {
    border: "2px solid var(--gray200)",
    padding: "8px",
    textAlign: "center",
  },
  th: {
    backgroundColor: "var(--gray300)",
    fontWeight: "bold",
  },
}
export default DataFrame
