import React, { useState } from "react"
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"
import DropdownButton from "../../cs_list_manage/dropdown_button"

const BarChart = ({ data, title, isHorizontal = false }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("기간")

  const handlePeriodChange = (value) => {
    setSelectedPeriod(value)
    console.log("선택된 기간:", value)
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Total</h2>

        <DropdownButton
          options={["1주", "1개월", "3개월", "6개월", "1년"]}
          selectedValue={selectedPeriod}
          onSelect={handlePeriodChange}
          style={styles.dropdownButton}
          defaultLabel={selectedPeriod}
        />
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RechartsBarChart
          style={styles.chart_size}
          data={data}
          layout={isHorizontal ? "vertical" : "horizontal"}
        >
          {isHorizontal ? (
            <>
              <YAxis type="category" dataKey="category" />
              <XAxis type="number" />
            </>
          ) : (
            <>
              <XAxis dataKey="category" />
              <YAxis />
            </>
          )}
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#007bff" barSize={30} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

const styles = {
  container: {
    padding: "16px",
    borderRadius: "10px",
    height: "330px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    width: "100%",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: 0,
  },
  chart_size: {
    paddingBottom: "10px",
    height: "300px",
  },
  dropdownButton: {
    width: "100px", // ✅ 드롭다운 너비 증가
    height: "32px", // ✅ 높이 조정
    fontSize: "14px",
    fontWeight: "600",

    textAlign: "center",
    backgroundColor: "#A3C5FC", // ✅ 드롭다운 배경색 변경 (파스텔 블루)
    border: "1px solid #7DA6F5", // ✅ 테두리 색상 추가
    borderRadius: "6px",
    cursor: "pointer",
    color: "#FFFFFF", // ✅ 글자색 흰색
    padding: "5px 10px",
  },
}

export default BarChart
