import React, { useState, useEffect } from "react"
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts"
import DropdownButton from "../../cs_list_manage/dropdown_button"
import { db, collection, getDocs } from "../../../services/firebase"

const CSStaticsChart = () => {
  const [setPeriod] = useState("주간")
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const consultDataSnapshot = await getDocs(
          collection(db, "consulter_statics")
        )

        const fetchedData = consultDataSnapshot.docs.map((doc) => ({
          name: doc.id,
          time: doc.data().call_time || 0,
          count: doc.data().call_count || 0,
          timeLabel: `${doc.data().call_time || 0}분`,
          countLabel: `${doc.data().call_count || 0}건`,
        }))

        setChartData(fetchedData)
      } catch (error) {
        console.error("Firestore 데이터 로드 중 오류 발생:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.chartBox}>
        <div style={styles.dropdownContainer}>
          <DropdownButton
            options={["주간", "월간"]}
            onSelect={setPeriod}
            defaultLabel="기간"
          />
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            style={styles.chart_size}
            data={chartData}
            margin={{ top: 0, right: 20, left: 20, bottom: 0 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="time" fill="#4E89FF" barSize={40}>
              <LabelList dataKey="timeLabel" position="top" />
            </Bar>
            <Line dataKey="count" stroke="#FF4E42" strokeWidth={2}>
              <LabelList dataKey="countLabel" position="top" />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "var(--blue500)",
    width: "100%",
    fontWeight: "800",
    height: "720px",
    borderRadius: "12px",
  },
  chartBox: {
    gap: "5px",
    position: "relative",
    width: "100%",
    height: "750px",
    paddingTop: "120px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
  },
  dropdownContainer: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 10,
  },
  chart_size: {
    fontSize: "20px",
    paddingTop: "50px",
    height: "2200px",
  },
}

export default CSStaticsChart
